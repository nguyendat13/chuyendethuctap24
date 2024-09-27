const myslug = function (slug) {
  slug = slug.toLowerCase();
  slug = slug.replace(/(å|ä|ā|à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|ä|ą)/g, "a");
  slug = slug.replace(/(ß|ḃ)/g, "b");
  slug = slug.replace(/(ç|ć|č|ĉ|ċ|¢|©)/g, "c");
  slug = slug.replace(/(đ|ď|ḋ|đ)/g, "d");
  slug = slug.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ę|ë|ě|ė)/g, "e");
  slug = slug.replace(/(ḟ|ƒ)/g, "f");
  slug = slug.replace(/ķ/g, "k");
  slug = slug.replace(/(ħ|ĥ)/g, "h");
  slug = slug.replace(/(ì|í|î|ị|ỉ|ĩ|ï|î|ī|¡|į)/g, "i");
  slug = slug.replace(/ĵ/g, "j");
  slug = slug.replace(/ṁ/g, "m");
  slug = slug.replace(/(ö|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ö|ø|ō)/g, "o");
  slug = slug.replace(/ṗ/g, "p");
  slug = slug.replace(/(ġ|ģ|ğ|ĝ)/g, "g");
  slug = slug.replace(/(ü|ù|ú|ū|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ü|ų|ů)/g, "u");
  slug = slug.replace(/(ỳ|ý|ỵ|ỷ|ỹ|ÿ)/g, "y");
  slug = slug.replace(/(ń|ñ|ň|ņ)/g, "n");
  slug = slug.replace(/(ŝ|š|ś|ṡ|ș|ş|³)/g, "s");
  slug = slug.replace(/(ř|ŗ|ŕ)/g, "r");
  slug = slug.replace(/(ṫ|ť|ț|ŧ|ţ)/g, "t");
  slug = slug.replace(/(ź|ż|ž)/g, "z");
  slug = slug.replace(/(ł|ĺ|ļ|ľ)/g, "l");
  slug = slug.replace(/(ẃ|ẅ)/g, "w");
  slug = slug.replace(/æ/g, "ae");
  slug = slug.replace(/þ/g, "th");
  slug = slug.replace(/ð/g, "dh");
  slug = slug.replace(/£/g, "pound");
  slug = slug.replace(/¥/g, "yen");
  slug = slug.replace(/ª/g, "2");
  slug = slug.replace(/º/g, "0");
  slug = slug.replace(/¿/g, "?");
  slug = slug.replace(/µ/g, "mu");
  slug = slug.replace(/®/g, "r");
  slug = slug.replace(/(Ä|À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|Ą|Å|Ā)/g, "A");
  slug = slug.replace(/(Ḃ|B)/g, "B");
  slug = slug.replace(/(Ç|Ć|Ċ|Ĉ|Č)/g, "C");
  slug = slug.replace(/(Đ|Ď|Ḋ)/g, "D");
  slug = slug.replace(/(È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|Ę|Ë|Ě|Ė|Ē)/g, "E");
  slug = slug.replace(/(Ḟ|Ƒ)/g, "F");
  slug = slug.replace(/(Ì|Í|Ị|Ỉ|Ĩ|Ï|Į)/g, "I");
  slug = slug.replace(/(Ĵ|J)/g, "J");
  slug = slug.replace(/(Ö|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|Ø)/g, "O");
  slug = slug.replace(/(Ü|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|Ū|Ų|Ů)/g, "U");
  slug = slug.replace(/(Ỳ|Ý|Ỵ|Ỷ|Ỹ|Ÿ)/g, "Y");
  slug = slug.replace(/Ł/g, "L");
  slug = slug.replace(/Þ/g, "Th");
  slug = slug.replace(/Ṁ/g, "M");
  slug = slug.replace(/(Ń|Ñ|Ň|Ņ)/g, "N");
  slug = slug.replace(/(Ś|Š|Ŝ|Ṡ|Ș|Ş)/g, "S");
  slug = slug.replace(/Æ/g, "AE");
  slug = slug.replace(/(Ź|Ż|Ž)/g, "Z");
  slug = slug.replace(/(Ř|R|Ŗ)/g, "R");
  slug = slug.replace(/(Ț|Ţ|T|Ť)/g, "T");
  slug = slug.replace(/(Ķ|K)/g, "K");
  slug = slug.replace(/(Ĺ|Ł|Ļ|Ľ)/g, "L");
  slug = slug.replace(/(Ħ|Ĥ)/g, "H");
  slug = slug.replace(/(Ṗ|P)/g, "P");
  slug = slug.replace(/(Ẁ|Ŵ|Ẃ|Ẅ)/g, "W");
  slug = slug.replace(/(Ģ|G|Ğ|Ĝ|Ġ)/g, "G");
  slug = slug.replace(/(Ŧ|Ṫ)/g, "T");
  if (slug.length === 0) return slug;
  slug = slug.replace(/(!|\"|#|$|%|'|̣)/g, "");
  slug = slug.replace(/(̀|́|̉|$|>)/g, "");
  slug = slug.replace([!"//!]*?[^<>]*?>'si", ""], slug);
  slug = slug.replace(/----/g, " ");
  slug = slug.replace(/---/g, " ");
  slug = slug.replace(/--/g, " ");
  slug = slug.replace(/(\W+)/gi, "-");
  slug = slug.replace(/-8220-|-8221-|-7776-/g, "-");
  slug = slug.replace(/dAg|DAg|uA|iA|yA|dA|--|-8230/g, function (x) {
    return {
      dAg: "dong",
      DAg: "Dong",
      uA: "uon",
      iA: "ien",
      yA: "yen",
      dA: "don",
      "--": "-",
      "-8230": "",
    }[x];
  });
  slug = slug.replace(/^-+|-+$/g, "");
  return slug.toLowerCase();
};

export default myslug;
