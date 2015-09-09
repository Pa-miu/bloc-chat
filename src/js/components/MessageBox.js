var MessageHeader = require('./MessageHeader');
var MessageList = require('./MessageList');
var MessageForm = require('./MessageForm');

// Hardcoded messages for testing
var mLorem = {
    iconURL : "",
    sender : "Ipsumus",
    timestamp : "00:00",
    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet sapien lobortis, interdum justo quis, fringilla libero. Nunc sollicitudin nunc a nibh commodo dapibus. In faucibus, mauris ornare condimentum porttitor, erat est lobortis nibh, in ultricies risus ligula id dui. Donec lacus orci, sagittis id odio a, cursus fringilla libero. Integer eu sapien ac libero viverra facilisis. Integer ultricies fermentum arcu a molestie. Donec ac tortor eu turpis efficitur semper at ut mauris.\n\nSed sollicitudin elit vel tellus condimentum porttitor. Curabitur orci justo, vestibulum vitae feugiat vel, auctor eu justo. Pellentesque pretium cursus nisl, quis bibendum orci imperdiet id. Donec pretium ipsum eget auctor aliquam. Nulla ac hendrerit velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet metus vitae mauris iaculis efficitur. Vivamus pellentesque diam at ante congue scelerisque. Maecenas dolor nisl, consectetur a egestas in, vestibulum eget massa.\n\nSuspendisse facilisis diam eu nisi rhoncus elementum. Vestibulum est est, malesuada vel eleifend pretium, porta sit amet neque. Donec accumsan dapibus ante, vitae dictum ligula convallis eget. Aenean consectetur vitae lacus luctus sollicitudin. Fusce luctus interdum ornare. In at enim ligula. Curabitur in gravida ante. Aliquam erat volutpat. Donec ligula erat, imperdiet sed dolor et, vestibulum porttitor lorem. Donec in vestibulum lectus. Cras ut tellus vel nisi pulvinar consequat at a sem. Vestibulum pretium consequat ex nec commodo. Vestibulum porta nulla quis elit elementum, et semper libero tristique. Duis ullamcorper viverra sem, id interdum dolor fringilla rhoncus. Mauris et ligula feugiat, pulvinar odio aliquet, facilisis nisl. Aliquam ut ipsum ut mi elementum lacinia.\n\nVivamus pulvinar lacinia risus, eget mattis lorem feugiat vitae. Vivamus eget aliquet mauris, ut scelerisque dui. Donec tempus nisi sapien, fermentum rhoncus metus tincidunt eget. Maecenas interdum massa pellentesque orci venenatis, vitae faucibus lorem porta. Ut tincidunt, tellus in interdum rhoncus, felis lectus maximus dolor, in rutrum nisl libero quis ante. In vitae euismod mi, vel rhoncus leo. Aenean eget mi mi. Proin malesuada, dui eget porta finibus, massa ipsum condimentum tortor, sit amet convallis nunc urna nec ex."
};

var mKusera = {
    iconURL : "images/icon-default1.png",
    sender : "kusera",
    timestamp : "14:15",
    content : "Hello World!"
};

var mDivider = {
    date : (new Date())
};

var mJD = {
    iconURL : "images/icon-default2.png",
    sender : "jd",
    timestamp : "15:44",
    content : "Hi, kusera!"
};

var messageArray = [
    mLorem,
    mKusera,
    mDivider,
    mJD
];

var MessageBox = React.createClass({
    render : function () {
        return (
            <div className="message-box message-sidebar-offset">
                <MessageHeader roomname="Room 1"/>
                <MessageList messages={messageArray}/>
                <MessageForm/>
            </div>
        );
    }
});

module.exports = MessageBox;