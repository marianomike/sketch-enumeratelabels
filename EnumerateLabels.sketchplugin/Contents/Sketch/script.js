var onRun = function(context) {

  //reference the document
  var doc = context.document;

  //reference the selected layers
  var selectedLayers = context.selection;

  //count the selected layers
  var selectedCount = selectedLayers.count();

  if (selectedCount == 0) {
    //show a message if nothing is selected
    doc.showMessage("No layers are selected.");
  } else {
    //create an array to hold all the text layers if other types of layers are selected
    var textLayerArray = [];

    //loop through the selected layers
    for (var i = 0; i < selectedCount; i++) {

      //reference each layer
      var layer = selectedLayers[i];

      //check if the layer is a text layer
      if(layer.class() == "MSTextLayer"){
        //if it is push it into the text array
        textLayerArray.push(layer);
      }
    }

    //loop through the text array
    for (var z = 0; z < textLayerArray.length; z++){
      //reference each text layer
      var textLayer = textLayerArray[z];
      //create a string out of the array number + 1 since arrays start at 0
      var textString = String(z + 1);
      //set the string value to the array number
      textLayer.setStringValue(textString);
    }
  };

};
