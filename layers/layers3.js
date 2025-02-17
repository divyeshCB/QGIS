var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Week_Payload_21_28_Jan_TruckData_1 = new ol.format.GeoJSON();
var features_Week_Payload_21_28_Jan_TruckData_1 = format_Week_Payload_21_28_Jan_TruckData_1.readFeatures(json_Week_Payload_21_28_Jan_TruckData_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Week_Payload_21_28_Jan_TruckData_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Week_Payload_21_28_Jan_TruckData_1.addFeatures(features_Week_Payload_21_28_Jan_TruckData_1);
var lyr_Week_Payload_21_28_Jan_TruckData_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Week_Payload_21_28_Jan_TruckData_1, 
                style: style_Week_Payload_21_28_Jan_TruckData_1,
                popuplayertitle: 'Week_Payload_21_28_Jan_TruckData',
                interactive: true,
    title: 'Week_Payload_21_28_Jan_TruckData<br />\
    <img src="styles/legend/Week_Payload_21_28_Jan_TruckData_1_0.png" /> Dumping<br />\
    <img src="styles/legend/Week_Payload_21_28_Jan_TruckData_1_1.png" /> Fully Loaded<br />\
    <img src="styles/legend/Week_Payload_21_28_Jan_TruckData_1_2.png" /> Loading<br />\
    <img src="styles/legend/Week_Payload_21_28_Jan_TruckData_1_3.png" /> Stopped Loaded<br />\
    <img src="styles/legend/Week_Payload_21_28_Jan_TruckData_1_4.png" /> Traveling Loaded<br />\
     <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_Week_Payload_21_28_Jan_TruckData_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Week_Payload_21_28_Jan_TruckData_1];
lyr_Week_Payload_21_28_Jan_TruckData_1.set('fieldAliases', {'SERIAL_NUMBER': 'SERIAL_NUMBER', 'FUEL_RATE': 'FUEL_RATE', 'ASSET_PAYLOAD': 'ASSET_PAYLOAD', 'PAYLOAD_STATUS': 'PAYLOAD_STATUS', 'X field': 'X field', 'Y field': 'Y field', 'Z field': 'Z field', 'TruckTimeStamp': 'TruckTimeStamp', 'Increased_FUEL_RATE': 'Increased_FUEL_RATE', 'UniqueID': 'UniqueID', });
lyr_Week_Payload_21_28_Jan_TruckData_1.set('fieldImages', {'SERIAL_NUMBER': 'TextEdit', 'FUEL_RATE': 'TextEdit', 'ASSET_PAYLOAD': 'TextEdit', 'PAYLOAD_STATUS': 'TextEdit', 'X field': 'TextEdit', 'Y field': 'TextEdit', 'Z field': 'TextEdit', 'TruckTimeStamp': 'DateTime', 'Increased_FUEL_RATE': 'TextEdit', 'UniqueID': 'TextEdit', });
lyr_Week_Payload_21_28_Jan_TruckData_1.set('fieldLabels', {'SERIAL_NUMBER': 'no label', 'FUEL_RATE': 'no label', 'ASSET_PAYLOAD': 'no label', 'PAYLOAD_STATUS': 'no label', 'X field': 'no label', 'Y field': 'no label', 'Z field': 'no label', 'TruckTimeStamp': 'no label', 'Increased_FUEL_RATE': 'no label', 'UniqueID': 'no label', });
lyr_Week_Payload_21_28_Jan_TruckData_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});