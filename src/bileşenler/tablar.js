import axios from "axios";

const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //

  const divKonu = document.createElement("div");
  divKonu.classList.add("topics");
  divKonu.innerHTML= konu.map((baslik)=>{
    return `<div class = "tab">${baslik}</div>`;
  })
  .join("");
  return divKonu;
}

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  axios.get('http://localhost:5001/api/konular')
  .then(function (response) {
    // handle success
    console.log(response.data.konular);
    const tabSec= document.querySelector(secici);
    tabSec.appendChild(Tablar(response.data.konular));
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}

export { Tablar, tabEkleyici }
