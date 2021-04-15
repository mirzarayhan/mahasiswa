import GetAPI from "./get";
import PostAPI from "./post";
import DeleteAPI from "./delete";

const getNewsBlog = () => GetAPI('mahasiswa?_sort=id&_order=desc');    //penambahan sort and order berdasarkan parameter
const postNewsBlog = (dataYangDikirim) => PostAPI('mahasiswa', dataYangDikirim);
const deleteNewsBlog = (dataYangDihapus) => DeleteAPI('mahasiswa', dataYangDihapus);

const API = {  // inisialisasi dari function yang disediakan global API
    getNewsBlog,
    postNewsBlog,
    deleteNewsBlog
}

export default API;