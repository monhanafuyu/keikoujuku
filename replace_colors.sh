for file in src/components/*.tsx src/App.tsx; do
  sed -i 's/blue-950/\[#2a1f11\]/g' "$file"
  sed -i 's/blue-900/\[#3f2e1a\]/g' "$file"
  sed -i 's/blue-800/\[#594226\]/g' "$file"
  sed -i 's/blue-700/\[#a07c3f\]/g' "$file"
  sed -i 's/blue-600/\[#b38f4f\]/g' "$file"
  sed -i 's/blue-500/\[#c4a365\]/g' "$file"
  sed -i 's/blue-400/\[#d4b783\]/g' "$file"
  sed -i 's/blue-300/\[#e4cda5\]/g' "$file"
  sed -i 's/blue-200/\[#b38f4f\]\/30/g' "$file"
  sed -i 's/blue-100/\[#b38f4f\]\/20/g' "$file"
  sed -i 's/blue-50/\[#b38f4f\]\/10/g' "$file"
done
