function drop_handler(ev){
  console.log("Drop");
  ev.preventDefault();

  var data = ev.dataTransfer;
  var files = data.files;
  processFiles(files);

}

function dragover_handler(ev){
  console.log("dragOver");
  ev.preventDefault();
}

function dragend_handler(ev){

}

function processFiles(files){
  var file = files[0];
  var reader = new FileReader();
  reader.onload = function(event){
    geoMain(event.target.result);
  };
  reader.readAsText(file);
}
