import React from "react";

const Post = (props) => {
    return(
        <div className="artikel">
                    <div className="gambar-artikel">
                        <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel"/>
                    </div>
                    <div className="konten-artikel">
                        <p className="nim">{props.nim}</p>
                        <p className="nama">{props.nama}</p>
                        <p className="alamat">{props.alamat}</p>
                        <p className="hp">{props.hp}</p>
                        <p className="angkatan">{props.angkatan}</p>
                        <p className="status">{props.status}</p>

                        <button className="btn btn-sm btn-warning" onClick={() =>props.hapusArtikel(props.idArtikel)}>Hapus</button>
                    </div>
                </div>
    )
}

export default Post;