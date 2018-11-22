
//thieu thi thi ta chay yarn add react-native
import { View, Text, TouchableOpacity, Image, Dimensions, TextInput, ListView } from 'react-native';
import React, { Component } from 'react';
//import { Base64 } from 'js-base64';
import image from '../Components/images/1.jpg';
import Buffer1 from 'buffer'; // tren thu vien buffer
//    import RNFS  from 'react-native-fs';// npm install react-native-fs// yarn react-native// react-native link react-native-fs// https://www.npmjs.com/package/react-native-fs
import io from 'socket.io-client/dist/socket.io.js';//yarn add react-native-socket.io-client// yarn add socket.io-client
 // import sizeOf1 from 'image-size';// yarn add image-size  //yarn add buffer-image-size

var text = 'trungtamlaptrinhkhoapham';
var bytes = Buffer1.Buffer(text);
var jsoon = bytes.toJSON();

var imag = image;
var DATA = [
    {Ten: 'Mr.hoang', tuoi: '30'},
    {Ten: 'Mr.nhung', tuoi: '58'},
    {Ten: 'Mr.anh', tuoi: '20'},
    {Ten: 'Mr.yen', tuoi: '30'},
]
//var fs = require('fs');

var e;
export default class App extends Component {

    constructor(props) {
        super(props);
        e = this;
        this.socket = io('http://192.168.0.102:3000', { jsonp: false });
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(DATA),
            maunen: 'bue',
            text: jsoon,
            id: 1,
        };
        this.socket.on('server-send-client', data => {

            e.setState({
                id: 2,
                maunen: data,
                text: data, 
                dataSource: ds.cloneWithRows(data),
            });
            console.log('----DULIEU_TRA_VE---');
            console.log(data);
            console.log('----toJSON---');
            console.log(data.toJSON());
            console.log('----toString---');
            console.log(data.toString());
        });
    }

/*
    componentDidMount() {
        var bytes = Buffer1.Buffer(
            text
        ); //Buffer1 la lay thu vien, con Buffer la ham Buffer. de chuyen file ve dang buffer
        console.log('----App-----');
        console.log(bytes); //log buffer hien thi ra
    
        console.log('----App1-----');
        console.log(bytes.toJSON()); //chuyen buffer ve JSON() de truyen di
        console.log('----App2-----');
        console.log(bytes.toString()); //dua buffer ve string ve dang chuoi cua no hoan goc
    }
*/


    test() {  //nhan nut test la nhay vao test
        var bytes = Buffer1.Buffer(text);
        console.log('----App-----');
        console.log(bytes);

        console.log('----App1-----');
        console.log(bytes.toJSON());
        console.log('----App2-----');
        console.log(bytes.toString());
    }

    send() {
        this.socket.emit('client-send-color', this.state.text)
    }

    taoHang(property) {
        return(
            <View style={{ flex: 1, backgroundColor: '#40AEE5' }} key={property.id} >
               
                <Text key={property.id}>{property.Ten}</Text>
                <Text key={property.id}>{property.tuoi}</Text>
                <Text key={property.id}>{property.text}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: this.state.maunen }}>
                <Text> Componet app</Text>
                <TouchableOpacity onPress={() => this.test()}>
                    <Text>test</Text>
                </TouchableOpacity>

                <TextInput 
                    placeholder="..."
                    value={this.state.text}
                    onChangText={text => this.setState({ text: text })}

                />
                <TouchableOpacity onPress={() => this.send()}>
                    <Text>send</Text>
                </TouchableOpacity>

                <ListView 
                    dataSource={this.state.dataSource}
                    renderRow={this.taoHang}
                />
            </View>
        );
    }
}


/*


    /*
    componentDidMount() {
        //DocumentDirectoryPath 
        var bytes = Buffer1.Buffer(imag); //Buffer1 la lay thu vien, con Buffer la ham Buffer. de chuyen file ve dang buffer
        var noidung = RNFS.DocumentDirectoryPath +'/1.jpg';
       // var noidung = fs.readFileSync(__dirname + "/1.jpg");
        console.log('---noidung-----');
        console.log(noidung);
       // console.log(noidung.toJSON()); //chuyen buffer ve JSON() de truyen di
        console.log('----App-----');
        console.log(bytes); //log buffer hien thi ra
    
        console.log('----App1-----');
        console.log(bytes.toJSON()); //chuyen buffer ve JSON() de truyen di
        console.log('----App2-----');
        console.log(bytes.toString()); //dua buffer ve string ve dang chuoi cua no hoan goc
    }
    */

    /*
    componentDidMount() {
        sizeOf1.sizeOf('../Components/images/1.jpg', function (err, dimensions) {
            console.log(dimensions.width, dimensions.height);
        });
    }
    */
    
    /*
    componentDidMount() {
        var noidung = fs.readFileSync(__dirname + "/1.jpg");
        console.log(noidung);
        console.log(noidung.toJSON());
    }
    */
 

    /*
    componentDidMount() {
        var bytes = Buffer1.Buffer(
            imag
        ); //Buffer1 la lay thu vien, con Buffer la ham Buffer. de chuyen file ve dang buffer
        console.log('----App-----');
        console.log(bytes); //log buffer hien thi ra
    
        console.log('----App1-----');
        console.log(bytes.toJSON()); //chuyen buffer ve JSON() de truyen di
        console.log('----App2-----');
        console.log(bytes.toString()); //dua buffer ve string ve dang chuoi cua no hoan goc
    }
    */
    

    /*
    componentDidMount() {
        var pngBase64 ="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
        var y = Base64.decode(pngBase64);

       console.log('------App-------');
        console.log(y);
        console.log('------App-------');
    }
    */
