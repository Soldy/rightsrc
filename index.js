const $right = (require('rightrc')).base;
const $setuprc = (require('setuprc')).base;

const rightsBase = function(settings){
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
    this.checkPowerRead = function(in_){
        return  _read.checkPower(in_);
    };
    this.checkIdRead = function(in_){
        return  _read.checkId(in_);
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
    this.checkPowerWrite = function(in_){
        return  _write.checkPower(in_);
    };
    this.checkIdWrite = function(in_){
        return  _write.checkId(in_);
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
    this.checkPowerGrant = function(in_){
        return  _grant.checkPower(in_);
    };
    this.checkIdGrant = function(in_){
        return  _grant.checkId(in_);
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
    this.import = function(in_){
        return _import(in_);

    }
    this.all = function(){
        return {
            'read'  : _read.all(),
            'write' : _write.all(),
            'grant' : _grant.all()
        }
    }
    const _setup = new $setuprc({
        'read_power' : {
            'type'    : 'integer',
            'default' : 100
        },
        'write_power' : {
            'type'    : 'integer',
            'default' : 50
        },
        'grant_power' : {
            'type'    : 'integer',
            'default' : 25
        },
        'read_file' : {
            'type'    : 'string',
            'default' : 'read_right.jsprc'
        },
        'write_file' : {
            'type'    : 'string',
            'default' : 'write_right.jsprc'
        },
        'grant_file' : {
            'type'    : 'string',
            'default' : 'grant_right.jsprc'
        }
    });
    const _import = function(in_){
        if(typeof in_ === 'undefined' )
            return false;
        if(typeof in_.grant !== 'undefined')
            _importGrant(in_.grant);
        if(typeof in_.read !== 'undefined')
            _importRead(in_.read);
        if(typeof in_.write !== 'undefined')
           _importWrite(in_.read);
        
    }
    const _importGrant = function(in_){
        _grant.import(in_.power, in_id);
    }
    const _importRead = function(in_){
        _read.import(in_.power, in_id);
    }
    const _importWrite = function(in_){
        _write.import(in_.power, in_id);
    }

    // construtor
    _setup.setup(settings);
    let _read  = new $right({
        'power' : _setup.get('read_power'),
        'file'  : _setup.get('read_file')
    });
    let _write = new $right({
        'power' : _setup.get('write_power'),
        'file'  : _setup.get('write_file')
    });
    let _grant = new $right({
        'power' : _setup.get('grant_power'),
        'file'  : _setup.get('grant_file')
    });
};

exports.base = rightsBase;
