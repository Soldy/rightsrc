'use strict';
const fs = require('fs');
const path = require('path');
const nanoTest  = new (require('nanoTest')).test({
    'progress_bar' : false,
    'debug_print'  : 'long'
});

const _options = {
        'read_power' : 90,
        'write_power' : 45,
        'grant_power' : 15,
        'read_file'   : 'test/read_right.jsprc',
        'write_file'  : 'test/write_right.jsprc',
        'grant_file'  : 'test/grant_right.jsprc'
};
const $rightsrc = new (require('./index.js')).base(_options);
nanoTest.add(
    'getPowerRead',
    {
        'function':$rightsrc.getPowerRead,
        'options':[]
    },
    '===',
    90
);
nanoTest.add(
    'setPowerRead',
    {
        'function':$rightsrc.setPowerRead,
        'options':[95,20]
    },
    '===',
    false
);
nanoTest.add(
    'getPowerRead',
    {
        'function':$rightsrc.getPowerRead,
        'options':[]
    },
    '===',
    90
);
nanoTest.add(
    'setPowerRead',
    {
        'function':$rightsrc.setPowerRead,
        'options':[95,5]
    },
    '===',
    true
);
nanoTest.add(
    'getPowerRead',
    {
        'function':$rightsrc.getPowerRead,
        'options':[]
    },
    '===',
    95
);
nanoTest.add(
    'addRead lower right',
    {
        'function':$rightsrc.addRead,
        'options':['pompi', 10]
    },
    '===',
    true
);
nanoTest.add(
    'addRead higher right',
    {
        'function':$rightsrc.addRead,
        'options':['pompc', 20]
    },
    '===',
    false
);
nanoTest.add(
    'getPowerWrite',
    {
        'function':$rightsrc.getPowerWrite,
        'options':[]
    },
    '===',
    45
);
nanoTest.add(
    'setPowerWrite',
    {
        'function':$rightsrc.setPowerWrite,
        'options':[95,20]
    },
    '===',
    false
);
nanoTest.add(
    'getPowerWrite',
    {
        'function':$rightsrc.getPowerWrite,
        'options':[]
    },
    '===',
    45
);
nanoTest.add(
    'setPowerWrite',
    {
        'function':$rightsrc.setPowerWrite,
        'options':[50,5]
    },
    '===',
    true
);
nanoTest.add(
    'getPowerWrite',
    {
        'function':$rightsrc.getPowerWrite,
        'options':[]
    },
    '===',
    50
);
nanoTest.add(
    'addWrite lower right',
    {
        'function':$rightsrc.addWrite,
        'options':['pompi', 10]
    },
    '===',
    true
);
nanoTest.add(
    'addWrite higher right',
    {
        'function':$rightsrc.addWrite,
        'options':['pompc', 20]
    },
    '===',
    false
);
nanoTest.add(
    'getPowerGrant',
    {
        'function':$rightsrc.getPowerGrant,
        'options':[]
    },
    '===',
    15
);
nanoTest.add(
    'setPowerGrant',
    {
        'function':$rightsrc.setPowerGrant,
        'options':[20,20]
    },
    '===',
    false
);
nanoTest.add(
    'getPowerGrant',
    {
        'function':$rightsrc.getPowerGrant,
        'options':[]
    },
    '===',
    15
);
nanoTest.add(
    'setPowerGrant',
    {
        'function':$rightsrc.setPowerGrant,
        'options':[20,5]
    },
    '===',
    true
);
nanoTest.add(
    'getPowerGrant',
    {
        'function':$rightsrc.getPowerGrant,
        'options':[]
    },
    '===',
    20
);
nanoTest.add(
    'addGrant lower right',
    {
        'function':$rightsrc.addGrant,
        'options':['pompi', 10]
    },
    '===',
    true
);
nanoTest.add(
    'addGrant higher right',
    {
        'function':$rightsrc.addGrant,
        'options':['pompc', 20]
    },
    '===',
    false
);

nanoTest.add(
    'delete read store file',
    {
        'function':async function(){
           await fs.unlinkSync('test/read_right.jsprc');
           return true;
        },
        'options':[]
    },
    '!==',
    false
);
nanoTest.add(
    'delRead not in the list',
    {
        'function':$rightsrc.delRead,
        'options':['pompi', 'pompc']
    },
    '===',
    false
);
nanoTest.add(
    'delRead in the list',
    {
        'function':$rightsrc.delRead,
        'options':['pompi', 'pompi']
    },
    '===',
    true
);
nanoTest.add(
    'delWrite not in the list',
    {
        'function':$rightsrc.delWrite,
        'options':['pompi', 'pompc']
    },
    '===',
    false
);
nanoTest.add(
    'delWrite in the list',
    {
        'function':$rightsrc.delWrite,
        'options':['pompi', 'pompi']
    },
    '===',
    true
);
nanoTest.add(
    'delGrant not in the list',
    {
        'function':$rightsrc.delGrant,
        'options':['pompi', 'pompc']
    },
    '===',
    false
);
nanoTest.add(
    'delGrant in the list',
    {
        'function':$rightsrc.delGrant,
        'options':['pompi', 'pompi']
    },
    '===',
    true
);

nanoTest.add(
    'delete write store file',
    {
        'function':async function(){
           await fs.unlinkSync('test/write_right.jsprc');
           return true;
        },
        'options':[]
    },
    '!==',
    false
);
nanoTest.add(
    'delete grant store file',
    {
        'function':async function(){
           await fs.unlinkSync('test/grant_right.jsprc');
           return true;
        },
        'options':[]
    },
    '!==',
    false
);

nanoTest.run();
