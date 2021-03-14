const $right = new require('right').base();

const rightsBase = function(){
    this.getPowerRead = function(){
        return _read.getPower();
    };
    this.setPowerRead = function(in_, issuer){
        if (_grant.check(issuer))
            return _read.setPower(in_);
        return false;
    };
    this.listRead = function(){
        return _read.list();
    };
    this.checkRead = function(in_){
        return  _read.check(in_);
    };
    this.addRead = function(in_, issuer){
        if (_grant.check(issuer))
            return _read.add(in_);
        return false;
    };
    this.delRead = function(in_, issuer){
        if (_grant.check(issuer))
            return _read.del(in_);
        return false;

    };
    this.listRead = function(){
        return _read.list();
    };
    this.getPowerWrite = function(){
        return _write.getPower();
    };
    this.setPowerWrite = function(in_, issuer){
        if (_grant.check(issuer))
            return _write.setPower(in_);
        return false;
    };
    this.listWrite = function(){
        return _write.list();
    };
    this.checkWrite = function(in_){
        return  _write.check(in_);
    };
    this.addWrite = function(in_, issuer){
        if (_grant.check(issuer))
            return _write.add(in_);
        return false;
    };
    this.delWrite = function(in_, issuer){
        if (_grant.check(issuer))
            return _write.del(in_);
        return false;

    };
    this.listWrite = function(){
        return _write.list();
    };
    this.getPowerGrant = function(){
        return _grant.getPower();
    };
    this.setPowerGrant = function(in_, issuer){
        if (_grant.check(issuer))
            return _grant.setPower(in_);
        return false;
    };
    this.listGrant = function(){
        return _grant.list();
    };
    this.checkGrant = function(in_){
        return  _grant.check(in_);
    };
    this.addGrant = function(in_, issuer){
        if (_grant.check(issuer))
            return _grant.add(in_);
        return false;
    };
    this.delGrant = function(in_, issuer){
        if (_grant.check(issuer))
            return _grant.del(in_);
        return false;

    };
    this.listGrant = function(){
        return _grant.list();
    };
    let _read  = new $right();
    let _write = new $right();
    let _grant = new $right();
};

exports.base = rightsBase;
