<template>
  <div id="cesiumContainer"></div>
</template>
<script>
export default {
  name: "cesium",
  methods: {
    initCesium() {
      let viewer = new Cesium.Viewer("cesiumContainer", {
        animation: false,
        timeline: false,
        fullscreenButton: false,
        geocoder: false,
        baseLayerPicker: false
      });
      window.cesiumViewer = viewer; //不要把cesium实例挂载到vue的data对象中(有性能问题)
    },
    addDom() {
      window.cesiumViewer.imageryLayers.addImageryProvider(
        new Cesium.WebMapTileServiceImageryProvider({
          url: `http://t0.tianditu.gov.cn/img_w/wmts?tk=a89df02c93e5474e9ebeb81a32fcb487`, //记得换成自己的key
          layer: "img",
          style: "default",
          tileMatrixSetID: "w",
          format: "tiles",
          maximumLevel: 18
        })
      );
      window.cesiumViewer.imageryLayers.addImageryProvider(
        new Cesium.WebMapTileServiceImageryProvider({
          url: `http://t0.tianditu.gov.cn/cia_w/wmts?tk=a89df02c93e5474e9ebeb81a32fcb487`, //记得换成自己的key
          layer: "cia",
          style: "default",
          tileMatrixSetID: "w",
          format: "tiles",
          maximumLevel: 18
        })
      );
    },
    addNav() {
      window.cesiumViewer.cesiumWidget.creditContainer.style.display = "none";
    //   window.cesiumViewer.terrainProvider = cesiumTerrainProvider;
      window.cesiumViewer.extend(Cesium.viewerCesiumNavigationMixin, {});
    }
  },
  mounted() {
    this.initCesium();
    this.addNav()
    this.addDom();
  }
};
</script>
<style scoped>
#cesiumContainer {
  height: 100%;
}
</style>