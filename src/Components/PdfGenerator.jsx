import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";



  const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",
      color: "black",
    },
    section: {
      margin: 10,
      padding: 10,
    },
    viewer: {
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
  });


  const PdfDocument=({data})=>{

    return (
      <div>
      {/* Direct download link */}
      <a href={data.url} download={"dlsjfo"}>
        <button className="bg-blue-500 text-white p-2 rounded">
          Download PDF
        </button>
      </a>
    </div>
      //   <Document>
      //   <Page size="A4" style={styles.page}>
      //     <View style={styles.section}>
      //       <Text>Type: {data}</Text>
      //     </View>
      //   </Page>
      // </Document>
    )
  }

  export default PdfDocument