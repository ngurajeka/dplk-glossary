let data = [
    {
        "title": "Asset Allocation",
        "description": "Penempatan sejumlah data atau sejumlah uang ke beberapa instrumen investasi dengan tujuan untuk mengurangi risiko total",
    },{
        "title": "AUM (Asset Under Management)",
        "description": "Asset Under Management (AUM) menunjukkan seberapa besar dana masyarakat yang terkumpul pada suatu dana pensiun",
    },{
        "title": "DPPK",
        "description": "DPPLK adalah Dana Pensiun yang dibentuk / didirikan oleh orang atau badan yang mempekerjakan karyawan, selaku Pendiri dari Dana Pensiun, untuk menyelenggarakan Program Pensiun Manfaat Pasti atau Program Pensiun Iuran Pasti bagi kepentingan sebagian atau keseluruhan karyawannya yang menjadi peserta program pensiun dan yang menimbulkan kewajiban terhadap pemberi kerja",
    },{
        "title": "DPLK",
        "description": "DPLK adalah Dana Pensiun yang dibentuk oleh Bank atau perusahaan asuransi jiwa untuk menyelenggarakan Program Pensiun Iuran Pasti bagi perorangan, baik karyawan maupun pekerja mandiri yang terpisah dari Dana Pensiun Pemberi Kerja bagi karyawan bank atau perusahaan asuransi jiwa yang bersangkutan"
    },{
        "title": "PPMP (Program Pensiun Manfaat Pasti)",
        "description": "PPMP adalah program pensiun yang manfaatnya ditetapkan dalam PDP atau program pensiun lain yang bukan merupakan PPIP"
    },{
        "title": "PPIP (Program Pensiun Iuran Pasti)",
        "description": "PPIP adalah program pensiun yang iurannya ditetapkan dalam PDP dan seluruh iuran serta hasil pengembangannya dibukukan pada rekening masing-masing peserta sebagai manfaat pensiun"
    }
];

function filterData(data, q) {
    if (q == null || q == "") return data;
    return data.filter((v) => {
        return v.title.toLowerCase().includes(q.toLowerCase());
    });
}

new Vue({
    el: '#app',
    data: {
        data: data,
        keyword: "",
    },
    methods: {
        search: function(event) {
            this.data = filterData(data, this.keyword);
        }
    }
})