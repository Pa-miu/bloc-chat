var MessageHeader = require('./MessageHeader');
var MessageList = require('./MessageList');

// Hardcoded messages for testing
var mLorem = {
    iconURL : "",
    sender : "Ipsumus",
    timestamp : "00:00",
    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula tortor, auctor ac scelerisque ac, sollicitudin in eros. Sed at luctus velit. Nunc pharetra felis quam, at consectetur urna iaculis et. Nullam id quam tincidunt, eleifend justo eget, consequat velit. Suspendisse eu risus diam. Cras hendrerit quam mi, ac egestas lacus ornare vitae. Aliquam ut malesuada ante. Proin sollicitudin consectetur sapien, et viverra justo fermentum in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id euismod ipsum. Phasellus bibendum, tellus nec placerat gravida, elit urna dignissim sapien, sed convallis dui leo vitae ante. Phasellus hendrerit id massa sed sodales. Nunc pulvinar purus eget orci dictum, ut mattis augue luctus. Sed lacus augue, tincidunt at ante sed, tempus blandit erat. Vivamus interdum justo urna, id maximus enim pulvinar eget. Sed euismod iaculis libero a placerat.\nCurabitur elementum enim eget sapien ullamcorper euismod. Aenean ullamcorper arcu in efficitur posuere. Phasellus a dolor dignissim, semper elit in, varius sem. Praesent arcu felis, tristique vel laoreet eu, sodales non nisi. Pellentesque non tellus ac elit vehicula iaculis eget ac leo. Phasellus egestas, sem id interdum tempor, urna ante mollis lacus, sed scelerisque lacus orci facilisis nibh. Phasellus rutrum eros sed elementum lacinia.\nNam placerat ex eu condimentum efficitur. Curabitur pulvinar nulla felis, nec porta leo congue sed. Quisque lacinia efficitur elit quis tincidunt. Morbi ornare blandit nulla, at hendrerit ligula vehicula ut. Mauris vel sollicitudin orci. Vestibulum suscipit augue ut vulputate semper. Duis dictum nunc a rutrum auctor. Mauris sed vulputate dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed pellentesque mollis justo nec mattis. Maecenas at mi tellus. Nulla vitae nisi scelerisque neque rhoncus efficitur. Integer mattis elit vitae vestibulum iaculis.\nNam sit amet libero eget lacus dapibus egestas ut quis lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi tempus, augue ac viverra gravida, leo orci luctus eros, eu imperdiet velit justo et lorem. Nam cursus, tortor vitae interdum elementum, mauris erat dapibus erat, et varius purus enim sit amet nunc. Ut sodales lacinia bibendum. Vivamus et urna mauris. Pellentesque ultrices mi eu nisi porttitor, vel porttitor enim rhoncus. Proin tempus sodales odio, a malesuada purus hendrerit nec. Aliquam a eros eget tortor tincidunt finibus eu non nibh.\nNulla vitae turpis id turpis convallis pretium at sagittis sem. Suspendisse lobortis congue ex, sed ultricies est feugiat sed. Donec lobortis ornare sodales. Suspendisse lobortis magna sed laoreet rhoncus. Integer aliquet lectus tellus, non pulvinar neque molestie nec. Vestibulum turpis turpis, sodales id justo eget, tincidunt feugiat massa. Phasellus mattis dignissim diam a tincidunt. Pellentesque ullamcorper sollicitudin velit, non lacinia nibh fermentum et. Sed tellus leo, ultricies vel erat sed, vulputate semper tortor."
};

var mKusera = {
    iconURL : "images/icon-default1.png",
    sender : "kusera",
    timestamp : "14:15",
    content : "Hello World!"
};

var mDivider = {
    date : "9/9/2015"
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
            </div>
        );
    }
});

module.exports = MessageBox;