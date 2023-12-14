import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const Htmltopdf = () => {
  const convertpdf = async () => {
    try {
      // if (!RNHTMLtoPDF) {
      //   throw new Error('RNHTMLtoPDF is null or undefined.');
      // }

      const options = {
        html: `<h1 style='margin-bottom: 20px'>Heading</h1>
      <div style='text-align: justify'>Exercitation velit irure irure est nisi eu deserunt ut sunt eiusmod tempor aute esse ad. Id velit magna dolor occaecat fugiat cupidatat cillum eiusmod dolor exercitation laborum consequat sint. Amet incididunt voluptate dolor adipisicing laboris eiusmod nulla commodo consequat laborum in in. Est do do nisi incididunt occaecat enim quis occaecat ipsum et. Duis officia consequat veniam irure. Ad ad dolor velit aliquip nostrud. Ullamco irure tempor cupidatat laborum duis eu sit amet dolore id. Qui duis laboris aliqua occaecat ullamco dolor ipsum. Aute reprehenderit laboris nulla sit ea ex dolor et magna quis in ex. Irure pariatur veniam exercitation mollit dolor ex sit esse velit minim nisi. Amet adipisicing cillum labore esse commodo sunt. Ut cillum proident nulla elit anim ipsum irure commodo amet aliquip commodo consequat. Sit irure nisi cillum ullamco. Lorem occaecat in cupidatat nulla nulla nostrud pariatur aliqua anim aliqua ea Lorem. In reprehenderit sunt laboris ex ea adipisicing fugiat cillum est dolor anim ad. Lorem mollit nostrud culpa excepteur. Sint elit id anim esse magna est pariatur adipisicing.</div>

      <h1 style='margin-bottom: 20px'>Heading 2</h1>
      <div style='text-align: justify'>Exercitation velit irure irure est nisi eu deserunt ut sunt eiusmod tempor aute esse ad. Id velit magna dolor occaecat fugiat cupidatat cillum eiusmod dolor exercitation laborum consequat sint. Amet incididunt voluptate dolor adipisicing laboris eiusmod nulla commodo consequat laborum in in. Est do do nisi incididunt occaecat enim quis occaecat ipsum et. Duis officia consequat veniam irure. Ad ad dolor velit aliquip nostrud. Ullamco irure tempor cupidatat laborum duis eu sit amet dolore id. Qui duis laboris aliqua occaecat ullamco dolor ipsum. Aute reprehenderit laboris nulla sit ea ex dolor et magna quis in ex. Irure pariatur veniam exercitation mollit dolor ex sit esse velit minim nisi. Amet adipisicing cillum labore esse commodo sunt. Ut cillum proident nulla elit anim ipsum irure commodo amet aliquip commodo consequat. Sit irure nisi cillum ullamco. Lorem occaecat in cupidatat nulla nulla nostrud pariatur aliqua anim aliqua ea Lorem. In reprehenderit sunt laboris ex ea adipisicing fugiat cillum est dolor anim ad. Lorem mollit nostrud culpa excepteur. Sint elit id anim esse magna est pariatur adipisicing.</div>`,
        fileName: 'html_to_pdf',
        directory: 'Documents',
      };

      let file = await RNHTMLtoPDF.convert(options);
      // let file = await RNHTMLtoPDF
      console.log(file);
    } catch (error) {
      console.error('Error converting HTML to PDF:', error);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
      }}>
      <View>
        <Text style={{fontSize: 30, fontWeight: '700', color: 'red'}}>
          html to pdf
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          width: '90%',
          height: '7%',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}
        onPress={() => convertpdf()}>
        <Text
          style={{color: 'white', fontSize: 25, textTransform: 'capitalize'}}>
          Convert pdf
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Htmltopdf;

const styles = StyleSheet.create({});
