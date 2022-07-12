const { Extension, type, api } = require('clipcc-extension');

class hitokotoExtension extends Extension {
    onInit() {
        //一言
        api.addCategory({
            categoryId: 'someoneyang.hitokoto.category',
            messageId: 'someoneyang.hitokoto.category',
            color: '#8922FF'
        });

        //一言模块
        api.addBlock({
            opcode: 'someoneyang.hitokoto.hitokoto',
            type: type.BlockType.REPORTER,
            messageId: 'someoneyang.hitokoto.hitokoto',
            categoryId: 'someoneyang.hitokoto.category',
            function: () => this.getHitokoto()
        });

        api.addBlock({
            opcode: 'someoneyang.hitokoto.hitokotofrom',
            type: type.BlockType.REPORTER,
            messageId: 'someoneyang.hitokoto.hitokotofrom',
            categoryId: 'someoneyang.hitokoto.category',
            function: () => this.getHitokotoFrom()
        });

    }

    getHitokoto() {
        var e2shttpRequest = new XMLHttpRequest();
        e2shttpRequest.open('GET', 'https://v1.api.paimon.cloud/hitokoto/normal', false);
        e2shttpRequest.send();
        console.log ("数据发送完成");
        return e2shttpRequest.responseText;
    }

    getHitokotoFrom() {
        var e2shttpRequest = new XMLHttpRequest();
        e2shttpRequest.open('GET', 'https://v1.api.paimon.cloud/hitokoto/withfrom', false);
        e2shttpRequest.send();
        console.log ("数据发送完成");
        return e2shttpRequest.responseText;
    }

    onUninit() {
        api.removeCategory('someoneyang.hitokoto.category');
    }

}

module.exports = hitokotoExtension;

