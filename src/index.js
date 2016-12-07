import randomInt from 'random-int';
import clamp from 'clamp';
import leftPad from 'left-pad';

export default (emailAddress, hexEncoding = 0) => {
    let emailNoSpamAddress = '';

    for (let letter of emailAddress) {
        switch (randomInt(0, 1 + clamp(hexEncoding, 0, 1))) {
            case 0:
                emailNoSpamAddress += `&#${letter.charCodeAt(0)};`;

                break;
            case 1:
                emailNoSpamAddress += letter;

                break;
            case 2:
                emailNoSpamAddress += `%${leftPad(letter.charCodeAt(0).toString(16), 2, '0')}`;

                break;
        }
    }

    return emailNoSpamAddress.replace('@', '&#64;');
};