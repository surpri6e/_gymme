var isValid = true;
var isTrue = false;
var num = 123;
var double = 4.2345523;
var bigNumber = 3e5;
var arrNumbers = [12, 21, 11, 24, 32,];
var arrBools = [true, false, true, true];
var arrBoolsInNumbers = [];
var arrStrings = ['asd', 'ads'];
for (var i = 0; i < arrBools.length; i++) {
    if (arrBools[i]) {
        arrBoolsInNumbers.push(1);
    }
    else {
        arrBoolsInNumbers.push(0);
    }
}
var contact = ['asd', 213];
var contact2 = [[], [], []];
var contact3 = [['asd', 123], ['asd', 123]];
var different = [];
different.push(1);
console.log(different);
different = 'dfs';
console.log(different);
// const myFunc = (num): number => {
//     return num;
// }
function myFunc(num) {
    return num;
}
function sayName(name) {
    console.log((typeof name === 'string') ? name : 'You haven\'t name');
}
console.log(myFunc(123));
sayName('Ilya');
sayName(null);
var info = /** @class */ (function () {
    function info(constur) {
        this.height = constur.size.height;
        this.width = constur.size.width;
    }
    return info;
}());
var newinfo = new info({
    size: {
        height: 520,
        width: 32
    }
});
var newinfo2 = new info({
    size: {
        height: 1920,
        width: 1080
    }
});
function watcher(h, w) {
    console.log('height = ', h);
    console.log('width = ', w);
}
watcher(newinfo.height, newinfo.width);
watcher(newinfo2.height, newinfo2.width);
var newFunc = {
    pass: 123,
    login: 'sadsad',
    admin: 'i\'m',
    data: {
        time: '05340982',
        date: 14124
    }
};
var acc1 = {
    ID: '505',
    information: {
        login: 'sur',
        pass: '234'
    },
    isValidAccount: true
};
var acc2 = {
    ID: '506',
    information: {
        login: 'surp',
        pass: '234',
        dateRegistration: new Date()
    },
    isValidAccount: null
};
var acc3 = {
    ID: '506',
    information: {
        login: 'surpsdf',
        pass: '234ddfs'
    },
    isValidAccount: false
};
var acc4 = {
    ID: '506as',
    information: {
        login: 'surpsdfs',
        pass: '234ddf1s'
    },
    isValidAccount: false,
    name: 'danila',
    lastName: 'NaN'
};
var acc5 = {
    ID: '506',
    information: {
        login: 'surpsdf',
        pass: '234ddfs'
    },
    isValidAccount: false,
    name: 'ponyal',
    lastName: 'перезаписывается просто на необходимое'
};
var base = [];
acc5.name = 'asd';
console.log(acc5.name);
for (var i = 0; i < 500; i++) {
    var acc = {
        ID: "".concat(i),
        information: {
            login: 'surpri6e Clone!',
            pass: "".concat(i * 156 / (i - (i / 2) * 1055 / 67))
        },
        isValidAccount: false,
        name: 'empty',
        lastName: 'clones'
    };
    base.push(acc);
}
;
var people = /** @class */ (function () {
    function people(name) {
        this.lastName = 'empty';
        this.name = name;
    }
    people.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    people.prototype.getName = function () {
        return this.name;
    };
    ;
    return people;
}());
var person1 = new people('asd');
var socialBlock1;
(function (socialBlock1) {
    socialBlock1[socialBlock1["Vk"] = 0] = "Vk";
    socialBlock1[socialBlock1["Insta"] = 1] = "Insta";
    socialBlock1[socialBlock1["Facebook"] = 2] = "Facebook";
    socialBlock1[socialBlock1["Twitter"] = 3] = "Twitter";
})(socialBlock1 || (socialBlock1 = {}));
var socialBlock2;
(function (socialBlock2) {
    socialBlock2[socialBlock2["Vk"] = 5] = "Vk";
    socialBlock2[socialBlock2["Insta"] = 6] = "Insta";
    socialBlock2[socialBlock2["Facebook"] = 7] = "Facebook";
    socialBlock2[socialBlock2["Twitter"] = 8] = "Twitter";
})(socialBlock2 || (socialBlock2 = {}));
// использование enum на практике 
console.log(socialBlock1.Vk);
console.log(socialBlock2[7]);
var socialBlock3;
(function (socialBlock3) {
    socialBlock3["Vk"] = "VK";
    socialBlock3["Insta"] = "INSTAGRAM";
    socialBlock3["Facebook"] = "FACEBOOK";
    socialBlock3["Twitter"] = "TWITTER";
})(socialBlock3 || (socialBlock3 = {}));
console.log(socialBlock3.Facebook);
console.log(socialBlock3['FACEBOOK']);
