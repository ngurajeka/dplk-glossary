let data = [
    {
        "title": "Asset Allocation",
        "description": "Penempatan sejumlah data atau sejumlah uang ke beberapa instrumen investasi dengan tujuan untuk mengurangi risiko total",
    },{
        "title": "AUM (Asset Under Management)",
        "description": "Asset Under Management (AUM) menunjukkan seberapa besar dana masyarakat yang terkumpul pada suatu dana pensiun",
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