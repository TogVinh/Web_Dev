function toc_node(name, link, child) {
    this.name = name;
    this.link = link;
    this.child = child;
}

const toc = [
    new toc_node("Các thẻ hay dùng", "", 
        [
            new toc_node("Thẻ định dạng văn bản", "./html/common_elements.html", []),
            new toc_node("Link đường dẫn", "./html/link.html", []),
            new toc_node("Thẻ tạo danh sách/bảng", "./html/table.html", []),
            new toc_node("Thẻ điền thông tin", "./html/form_input_lable.html", []),
            new toc_node("Thẻ anh", "./html/img.html", []),
            new toc_node("Media (vid, audio)", "./html/media.html", [])
        ]),
        new toc_node("Attribute trong HTML", "", 
        [
            new toc_node("1 số attribute hay dùng", "./html/common_attribute.html", [])
        ]),
];


// Generate table of content
// Todo: make this recursive 
function gen_toc() {
    var toc_str = "";

    for (val of toc) {
        if (val.link == "") {
            toc_str += `<a><h2>${val.name}</h2></a>`;
        } else {
            toc_str += `<a href="${val.link}"><h2>${val.name}</h2></a>`;
        }
        
        for (val_1 of val.child) {
            toc_str += `<a href="${val_1.link}">${val_1.name}</a>`;
            toc_str += "</br>";
        }
    }

    document.getElementById("toc").innerHTML = toc_str;
}
    
gen_toc();