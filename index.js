const $right = (require('rightrc')).base;
const $setuprc = (require('setuprc')).base;

const rightsBase = function(settings){
    /*
     * @public
     * @return {integer}
     */
    this.getPowerRead = function(){
        return _read.getPower();
    };
    /*
     * @param {integer}
     * @param {integer||string||array}
     * @public
     * @return {boolean}
     */
    this.setPowerRead = function(in_, issuer){
        if (_grant.check(issuer))
            return _read.setPower(in_);
        return false;
    };
    /*
     * @param {integer||string||array}
     * @public
     * @return {boolean}
     */
    this.checkRead = function(in_){
        return  _read.check(in_);
    };
    /*
     * @param {integer}
     * @public
     * @return {boolean}
     */
    this.checkPowerRead = function(in_){
        return  _read.checkPower(in_);
    };
    /*
     * @param {string}
     * @public
     * @return {boolean}
     */
    this.checkIdRead = function(in_){
        return  _read.checkId(in_);
    };
    /*
     * @param {string}
     * @param {integer||string||array}
     * @public
     * @return {boolean}
     */
    this.addRead = function(in_, issuer){
        if (_grant.check(issuer))
            return _read.add(in_);
        return false;
    };
    /*
     * @param {string}
     * @param {integer||string||array}
     * @public
     * @return {boolean}
     */
    this.delRead = function(in_, issuer){
        if (_grant.check(issuer))
            return _read.del(in_);
        return false;

    };
    /*
     * @public
     * @return {array}
     */
    this.listRead = function(){
        return _read.list();
    };
    /*
     * @public
     * @return {integer}
     */
    this.getPowerWrite = function(){
        return _write.getPower();
    };
    /*
     * @param {integer}
     * @param {integer||string||array}
     * @public
     * @return {boolean}
     */
    this.setPowerWrite = function(in_, issuer){
        if (_grant.check(issuer))
            return _write.setPower(in_);
        return false;
    };
    /*
     * @param {integer||string||array}
     * @public
     * @return {boolean}
     */
    this.checkWrite = function(in_){
        return  _write.check(in_);
    };
    /*
     * @param {integer}
     * @public
     * @return {boolean}
     */
    this.checkPowerWrite = function(in_){
        return  _write.checkPower(in_);
    };
    /*
     * @param {string}
     * @public
     * @return {boolean}
     */
    this.checkIdWrite = function(in_){
        return  _write.checkId(in_);
    };
    /*
     * @param {string}
     * @param {integer||string||array}
     * @public
     * @return {boolean}
     */
    this.addWrite = function(in_, issuer){
        if (_grant.check(issuer))
            return _write.add(in_);
        return false;
    };
    /*
     * @param {string}
     * @param {integer||string||array}
     * @public
     * @return {boolean}
     */
    this.delWrite = function(in_, issuer){
        if (_grant.check(issuer))
            return _write.del(in_);
        return false;

    };
    /*
     * @public
     * @return {array}
     */
    this.listWrite = function(){
        return _write.list();
    };
    /*
     * @public
     * @return {integer}
     */
    this.getPowerGrant = function(){
        return _grant.getPower();
    };
    /*
     * @param {integer}
     * @param {integer||string||array}
     * @public
     * @return {boolean}
     */
    this.setPowerGrant = function(in_, issuer){
        if (_grant.check(issuer))
            return _grant.setPower(in_);
        return false;
    };
    /*
     * @param {integer||string||array}
     * @public
     * @return {boolean}
     */
    this.checkGrant = function(in_){
        return  _grant.check(in_);
    };
    /*
     * @param {integer}
     * @public
     * @return {boolean}
     */
    this.checkPowerGrant = function(in_){
        return  _grant.checkPower(in_);
    };
    /*
     * @param {string}
     * @public
     * @return {boolean}
     */
    this.checkIdGrant = function(in_){
        return  _grant.checkId(in_);
    };
    /*
     * @param {string}
     * @param {integer||string||array}
     * @public
     * @return {boolean}
     */
    this.addGrant = function(in_, issuer){
        if (_grant.check(issuer))
            return _grant.add(in_);
        return false;
    };
    /*
     * @param {string}
     * @param {integer||string||array}
     * @public
     * @return {boolean}
     */
    this.delGrant = function(in_, issuer){
        if (_grant.check(issuer))
            return _grant.del(in_);
        return false;
    };
    /*
     * @public
     * @return {array}
     */
    this.listGrant = function(){
        return _grant.list();
    };
    /*
     * @param {object}
     * @public
     * @return {void}
     */
    this.import = function(in_){
        return _import(in_);

    };
    /*
     * @public
     * @return {object}
     */
    this.all = function(){
        return {
            'read'  : _read.all(),
            'write' : _write.all(),
            'grant' : _grant.all()
        };
    };
    /*
     * @private
     * @return {setuprc}
     */
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
    /*
     * @param {object}
     * @private
     * @return {setuprc}
     */
    const _import = function(in_){
        if(typeof in_ === 'undefined' )
            return false;
        if(typeof in_.grant !== 'undefined')
            _importGrant(in_.grant);
        if(typeof in_.read !== 'undefined')
            _importRead(in_.read);
        if(typeof in_.write !== 'undefined')
            _importWrite(in_.read);
        
    };
    /*
     * @private
     * @return {void}
     */
    const _importGrant = function(in_){
        _grant.import(in_.power, in_.id);
    };
    /*
     * @private
     * @return {void}
     */
    const _importRead = function(in_){
        _read.import(in_.power, in_.id);
    };
    /*
     * @private
     * @return {void}
     */
    const _importWrite = function(in_){
        _write.import(in_.power, in_.id);
    };

    // construtor
    _setup.setup(settings);
    /*
     * @private
     * @let {rightrc}
     */
    let _read  = new $right({
        'power' : _setup.get('read_power'),
        'file'  : _setup.get('read_file')
    });
    /*
     * @private
     * @let {rightrc}
     */
    let _write = new $right({
        'power' : _setup.get('write_power'),
        'file'  : _setup.get('write_file')
    });
    /*
     * @private
     * @let {rightrc}
     */
    let _grant = new $right({
        'power' : _setup.get('grant_power'),
        'file'  : _setup.get('grant_file')
    });
};

exports.base = rightsBase;
