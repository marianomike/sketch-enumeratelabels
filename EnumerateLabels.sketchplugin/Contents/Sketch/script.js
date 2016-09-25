var onRun = function(context) {

  var doc = context.document;
  var selectedLayers = context.selection;
  var selectedCount = selectedLayers.count();

  if (selectedCount == 0) {
    doc.showMessage("No layers are selected.");
  } else {
    log('Selected layers:');
    var textLayerArray = [];

    for (var i = 0; i < selectedCount; i++) {
      var layer = selectedLayers[i];
      if(layer.class() == "MSTextLayer"){
        textLayerArray.push(layer);
      }
    }

    for (var z = 0; z < textLayerArray.length; z++){
      var textLayer = textLayerArray[z];
      var textString = String(z + 1);
      textLayer.setStringValue(textString);
    }
  };

};
