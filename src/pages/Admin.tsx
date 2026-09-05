import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { db, auth, googleProvider } from '../firebase';
import { ShieldCheck, LogOut, Loader2, FileText, Calendar, Mail, User as UserIcon } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

interface ConsultationRequest {
  id: string;
  name: string;
  grade: string;
  email: string;
  createdAt: string;
}

export const Admin: React.FC = () => {
  const [user, setUser] = useState(auth.currentUser);
  const [requests, setRequests] = useState<ConsultationRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user && user.email === 'monhanafuyu@gmail.com') {
      fetchRequests();
    }
  }, [user]);

  const fetchRequests = async () => {
    try {
      setLoading(true);
      const q = query(collection(db, 'consultationRequests'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as ConsultationRequest[];
      setRequests(data);
    } catch (err: any) {
      setError(err.message || '読み込みに失敗しました');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err: any) {
      setError('ログインに失敗しました');
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 text-[#b38f4f] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Navbar onOpenConsultation={() => {}} />
      
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-32">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 sm:p-10 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-[#b38f4f] mb-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-bold tracking-widest text-sm">ADMINISTRATION</span>
              </div>
              <h1 className="text-2xl font-black text-slate-900 font-display">
                お申し込み管理画面
              </h1>
            </div>
            
            {user && (
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors self-start sm:self-auto"
              >
                <LogOut className="w-4 h-4" />
                ログアウト
              </button>
            )}
          </div>

          <div className="p-6 sm:p-10">
            {!user ? (
              <div className="text-center py-12">
                <p className="text-slate-600 mb-6">このページは管理者専用です。</p>
                <button
                  onClick={handleLogin}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold bg-slate-900 hover:bg-slate-800 transition-colors"
                >
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5 bg-white rounded-full" />
                  Googleでログイン
                </button>
              </div>
            ) : user.email !== 'monhanafuyu@gmail.com' ? (
              <div className="text-center py-12 text-red-600 bg-red-50 rounded-2xl">
                権限がありません。管理者アカウントでログインしてください。
              </div>
            ) : (
              <div>
                {error && (
                  <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                    {error}
                  </div>
                )}
                
                <h2 className="text-lg font-bold text-slate-800 mb-6">
                  無料相談お申し込み一覧 ({requests.length}件)
                </h2>
                
                <div className="space-y-4">
                  {requests.length === 0 ? (
                    <p className="text-slate-500 text-center py-8">現在お申し込みはありません。</p>
                  ) : (
                    requests.map(req => (
                      <div key={req.id} className="p-5 border border-slate-200 rounded-2xl hover:shadow-md transition-shadow bg-white">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#FAF9F5] text-[#b38f4f] flex items-center justify-center border border-[#f3e8d3]">
                              <UserIcon className="w-5 h-5" />
                            </div>
                            <div>
                              <h3 className="font-bold text-slate-900 text-lg">{req.name}</h3>
                              <div className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md inline-block mt-1">
                                {req.grade}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 text-sm text-slate-500">
                            <Calendar className="w-4 h-4" />
                            <time>{new Date(req.createdAt).toLocaleString('ja-JP')}</time>
                          </div>
                        </div>
                        
                        <div className="bg-slate-50 p-4 rounded-xl space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Mail className="w-4 h-4 text-slate-400" />
                            <a href={`mailto:${req.email}`} className="text-blue-600 hover:underline">{req.email}</a>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer onOpenConsultation={() => {}} />
    </div>
  );
};
