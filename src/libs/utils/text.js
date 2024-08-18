export function slugFormat(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-") // Ganti karakter non-alfanumerik dengan tanda hubung
    .replace(/^-+|-+$/g, ""); // Hapus tanda hubung di awal dan akhir
}
