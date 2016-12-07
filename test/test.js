import {expect} from 'chai';
import {AllHtmlEntities} from 'html-entities';
import antispambot from '../src';

let entities = new AllHtmlEntities();

describe('antispambot', () => {
    let email = 'test@test.com';
    let encoded = antispambot(email);

    it('should not be equal to input string', () => expect(encoded).to.not.equal(email));
    it('should replace & with HTML entity', () => expect(encoded).to.contain('&#64;'));
    it('should be equal to input string', () => expect(entities.decode(encoded)).to.equal(email));
});