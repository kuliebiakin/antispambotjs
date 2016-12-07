import {expect} from 'chai';
import {AllHtmlEntities} from 'html-entities';
import antispambot from '../src';

let entities = new AllHtmlEntities();

describe('antispambot', () => {
    let encoded = antispambot('test@test.com');

    it('should not be equal to input string', () => expect(encoded).to.not.equal('test@test.com'));
    it('should replace & with HTML entity', () => expect(encoded).to.contain('&#64;'));
    it('should be equal to input string', () => expect(entities.decode(encoded)).to.equal('test@test.com'));
});