var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KepadatanPendudukKota_1 = new ol.format.GeoJSON();
var features_KepadatanPendudukKota_1 = format_KepadatanPendudukKota_1.readFeatures(json_KepadatanPendudukKota_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KepadatanPendudukKota_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KepadatanPendudukKota_1.addFeatures(features_KepadatanPendudukKota_1);
var lyr_KepadatanPendudukKota_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KepadatanPendudukKota_1, 
                style: style_KepadatanPendudukKota_1,
                popuplayertitle: 'Kepadatan Penduduk Kota',
                interactive: true,
    title: 'Kepadatan Penduduk Kota<br />\
    <img src="styles/legend/KepadatanPendudukKota_1_0.png" /> Rendah (8-12 Per Km²)<br />\
    <img src="styles/legend/KepadatanPendudukKota_1_1.png" /> Sedang (12-14 Per Km²)<br />\
    <img src="styles/legend/KepadatanPendudukKota_1_2.png" /> Tinggi (14-18 Per Km²)<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_KepadatanPendudukKota_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KepadatanPendudukKota_1];
lyr_KepadatanPendudukKota_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'TIPADM': 'TIPADM', 'WADMKC': 'Kecamatan', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'Field': 'Field', 'Join_1No': 'Join_1No', 'Join_1Luas': 'Luas Wilayah (ha)', 'Join_1Pend': 'Jumlah Penduduk (Ribu)', 'Join_1Kepa': 'Kepadatan Penduduk (Ribu/Km2)', 'Join_1Banj': 'Join_1Banj', 'Join_1Cuac': 'Join_1Cuac', 'Join_1Erup': 'Join_1Erup', 'Join_1Gelo': 'Join_1Gelo', 'Join_1Ge_1': 'Join_1Ge_1', 'Join_1Gemp': 'Join_1Gemp', 'Join_1Keba': 'Join_1Keba', 'Join_1Keke': 'Join_1Keke', 'Join_1Tana': 'Join_1Tana', });
lyr_KepadatanPendudukKota_1.set('fieldImages', {'fid': 'Hidden', 'OBJECTID': 'Hidden', 'NAMOBJ': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'METADATA': 'Hidden', 'TIPADM': 'Hidden', 'WADMKC': 'TextEdit', 'WADMKD': 'Hidden', 'WADMKK': 'Hidden', 'WADMPR': 'Hidden', 'LUAS': 'TextEdit', 'Field': 'Hidden', 'Join_1No': 'Hidden', 'Join_1Luas': 'TextEdit', 'Join_1Pend': 'TextEdit', 'Join_1Kepa': 'TextEdit', 'Join_1Banj': 'Hidden', 'Join_1Cuac': 'Hidden', 'Join_1Erup': 'Hidden', 'Join_1Gelo': 'Hidden', 'Join_1Ge_1': 'Hidden', 'Join_1Gemp': 'Hidden', 'Join_1Keba': 'Hidden', 'Join_1Keke': 'Hidden', 'Join_1Tana': 'Hidden', });
lyr_KepadatanPendudukKota_1.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'LUAS': 'inline label - always visible', 'Join_1Luas': 'inline label - always visible', 'Join_1Pend': 'inline label - always visible', 'Join_1Kepa': 'inline label - always visible', });
lyr_KepadatanPendudukKota_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});