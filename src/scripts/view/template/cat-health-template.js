const createCatHealthTemp = `
<div class="col">
<h2>Penyakit dan pengobatannya</h2>
<div class="tabs">
  <div class="tab">
    <input type="radio" id="rd3" name="rd">
    <label for="rd3" class="tab-close">Close others &times;</label>
  </div>
  <div class="tab">
    <input type="radio" id="rd1" name="rd">
    <label class="tab-label" for="rd1">Kucing beringus karena infeksi</label>
    <div class="tab-content">
      <p>
      Dilansir dari Kompas.com, (13/1/2022), Wakil Direktur Bidang Pendidikan RSH Prof Soeparwi FKH UGM, dr Slamet Raharjo mengatakan, ingusan pada kucing adalah satu proses fisiologis normal sistem kekebalan tubuh atau sistem imunitas untuk mengatasi adanya gangguan pada saluran pernapasan. 
      Menurut Slamet, gangguan saluran pernapasan ini dapat diakibatkan oleh sebab non-infeksi maupun sebab infeksi. Untuk gejala ingusan pada kucing karena infeksi disebabkan oleh agen infeksi seperti bakteri, virus dan fungi, kapang, atau jamur. 
      </p>

      <p>
      Pada kasus ini perlu bantuan dokter hewan untuk menentukan penyebabnya serta pemilihan terapi yang paling sesuai dengan penyebabnya. Ia menambahkan, pengobatan bisa dilakukan dengan pemberian antiinflamasi untuk meringankan gejala ingusan, dan vitamin untuk meningkatkan stamina dan daya tahan tubuh. 
      Pada kondisi yang lebih parah, dapat diberikan antibiotik untuk mencegah terjadinya infeksi sekunder bakteri yang dapat memperparah kondisi kucing. Selain itu, terapi antibiotik yang dikombinasi dengan antiinflamasi untuk meringankan gejala ingusan serta vitamin untuk meningkatkan stamina dan daya tahan tubuh bisa diterapkan pada kucing yang beringus karena infeksi bakteri. 
      Untuk ingusan yang disebabkan oleh infeksi fungi, kapang, atau jamur dapat diberikan terapi antifungal dikombinasi dengan antiinflamasi untuk meringankan gejala ingusan serta vitamin untuk meningkatkan stamina dan daya tahan tubuh.
      </p>

      <img src='../images/cat-health-1.jpg'>
    </div>
  </div>

  <div class="tab">
    <input type="radio" id="rd2" name="rd">
    <label class="tab-label" for="rd2">Feline Immunodeficiency Virus (FIV)</label>
    <div class="tab-content">
      <p>Dikutip dari Kompas.com, (14/7/2021), Feline Immunodeficiency Virus atau FIV adalah virus yang membahayakan dan melemahkan sistem kekebalan kucing. 
      Virus ini mampu membuat kucing berisiko tertular infeksi lain yang fatal. 
      FIV biasanya ditularkan antar kucing melalui luka gigitan yang dalam, air liur, serta darah. 
      Namun pada kasus tertentu, virus ini dapat ditularkan dari induk kucing ke anak kucing.
      </p>
      <p>
      Pengobatan untuk kucing yang terinfeksi FIV bisa dengan dibawa ke dokter hewan untuk dilakukan penguatan sistem kekebalan tubuh si kucing. 
      Setelah diperiksa, dokter hewan akan merekomendasikan obat antivirus, perubahan pola makan, atau suplemen.
      </p>
      <img src ='../images/cat-health-2.jpg'>
    </div>
  </div>

  <div class="tab">
    <input type="radio" id="rd4" name="rd">
    <label class="tab-label" for="rd4">Diare</label>
    <div class="tab-content">
      <p>
      Mengutip Kompas.com, (27/1/2021), diare merupakan salah satu penyakit yang tidak jarang dialami kucing semasa hidupnya. 
      Diare yang berlangsung selama 24 hingga 48 jam mungkin tidak akan menimbulkan masalah, kecuali Anda memiliki anak kucing atau kucing tua. 
      Namun jika berlangsung lebih lama, kucing bisa mengalami dehidrasi, yang dapat berbahaya. 
      Ada sejumlah penyebab kucing mengalami diare yakni perubahan pola makan atau alergi atau intoleransi makanan, penyakit radang usus, radang usus besar, cacing (parasit usus), penyakit pankreas, kanker, dan hipertiroidisme.
      </p>
      <p>
      Pengobatan pertama jika kucing mengalami diare selama lebih dari dua hari, maka bawalah kucing ke dokter hewan untuk mencari tahu penyebabnya. 
      Penting untuk menghubungi medis jika kucing mengalami diare berwarna hitam atau berdarah, atau jika terjadi bersamaan dengan demam, muntah, lesu atau kehilangan nafsu makan. 
      Perawatan yang dibutuhkan kucing bergantung pada penyebab diare mereka. Beberapa membutuhkan obat resep, seperti metronidazole atau prednisolone, untuk mengontrol peradangan.
      </p>
      <img src ='../images/cat-health-4.jpg'>
    </div>
  </div>
  <div class="tab">
    <input type="radio" id="rd5" name="rd">
    <label class="tab-label" for="rd5">Feline Herpes</label>
    <div class="tab-content">
      <p>Feline herpes atau feline viral rhinopneumonitis (FVR) adalah virus yang paling sering terjadi pada kucing selama hidup. 
      Penyakit ini juga merupakan salah satu penyebab utama infeksi saluran pernapasan atas pada kucing. 
      FVR bisa menular antar kucing melalui sekresi tubuh seperti keluarnya cairan dari mata, hidung, dan mulut. 
      Tingkat penularan lebih tinggi jika kucing berbagi kotak kotoran, mangkuk air dan makanan, mainan, dan alat perawatan. 
      Virus FVR juga dapat menyebar dari induk kucing ke anak kucingnya selama kehamilan.
      </p>
      <p>
      Pengobatan untuk kucing yang terinfeksi FVR yakni dengan penanganan kondisi saja, sebab herpes kucing tidak dapat disembuhkan. 
      Kucing bisa diberikan antibiotik atau obat antivurs yang diresepkan oleh dokter hewan untuk mencegah virus bereplikasi.
      </p>
    </div>
  </div>
  <div class="tab">
    <input type="radio" id="rd3" name="rd">
    <label for="rd3" class="tab-close">Close others &times;</label>
  </div>
</div>
</div>
</div>


<div class="col2">
<h2>Gejala</h2>
<div class="tabs">
  <div class="tab">
    <input type="radio" id="rd" name="rd">
    <label for="rd3" class="tab-close">Close others &times;</label>
  </div>
  <div class="tab">
    <input type="radio" id="rd6" name="rd">
    <label class="tab-label" for="rd6">Infeksi saluran pernapasan</label>
    <div class="tab-content">
     <p>
     Gejalanya bisa meliputi: Bersin, penyumbatan, batuk, tersedak, demam, depresi, dan pernapasan mulut terbuka.
     </p>
    </div>
  </div>
  <div class="tab">
    <input type="radio" id="rd7" name="rd">
    <label class="tab-label" for="rd7">FIV</label>
    <div class="tab-content">
      <p>
      Gejala FIV meliputi: Demam, Penurunan berat badan, Bulu rontok, Infeksi mata, dan Pembesaran kelenjar getah bening.
      </p>
    </div>
  </div>
  <div class="tab">
    <input type="radio" id="rd8" name="rd">
    <label class="tab-label" for="rd8">Diare</label>
    <div class="tab-content">
     <p>
     Gejalanya meliputi: BAB sangat lunak/cair, lebih sering BAB dari biasanya, muntah, lesu, tampak kesakitan,
     feses berwana gelap/berdarah, tidak nafsu makan, demam.
     </p>
    </div>
  </div>
  <div class="tab">
    <input type="radio" id="rd9" name="rd">
    <label class="tab-label" for="rd9">Feline Herpes</label>
    <div class="tab-content">
      <p>
      Gejalanya meliputi; Bersin, hidung tersumbat, konjungtivis/radang pada area garis mata,
      sering berkedip, muncul cairan mata dan hidung.
      </p>
    </div>
  </div>
  <div class="tab">
    <input type="radio" id="rd" name="rd">
    <label for="rd3" class="tab-close">Close others &times;</label>
  </div>
</div>
</div>
</div>
`;

export default createCatHealthTemp;
