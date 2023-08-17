function validatename(nombre) {
    const numbers = "0123456789";
    const specialCharacters = "!@#$%^&*()_+{}|:<>?/.,;[]=-";
    if (typeof nombre !== 'string') {
        return ('name must be a string');
    } else if (nombre.length < 2) {
        return ('name must be at least 2 characters long');
    } else if (nombre[0] !== nombre[0].toUpperCase()) {
        return ('Name must start with a capital letter');
    } else {
        let flag = true;
        for (let i = 0; i < nombre.length; i++) {
            if (numbers.includes(nombre[i]) || specialCharacters.includes(nombre[i])) {
                flag = false;
            }
        }
        if (flag) {
            return nombre;
        } else {
            return ('Name must not contain special characters or numbers');
        }
    }
}

function validatePhoneNumber(num) {
    letters = "abcdefghijklmnopqrstuvwxyz";
    if (typeof num !== 'string') {
        return ('Phone number must be a string');
    }
    let cleanNum = "";
    for (let i = 0; i < num.length; i++) {
        if (num[i] !== " " && num[i] !== "-" && num[i] !== "(" && num[i] !== ")") {
            cleanNum += num[i];
        }
    }
    flag = true;
    for (let i = 0; i < cleanNum.length; i++) {
        if (letters.includes(cleanNum[i])) {
            flag = false;
        }
    }
    if (flag) {
        if (cleanNum.length === 10 || (cleanNum.startsWith("+52") && cleanNum.length === 13)) {
            return cleanNum;
        } else {
            return ('Invalid phone number format');
        }
    } else {
        return ('Invalid phone number format');
    }


}

function validateEmail(email) {
    if (typeof email !== 'string') {
        return ('Email must be a string');
    }
    const emailParts = email.split('@');
    if (emailParts.length === 2) {
        const domainParts = emailParts[1].split('.');
        if (domainParts.length >= 2 && domainParts.length <= 3) {
            return email;
        } else {
            return ('Invalid email format');
        }
    } else {
        return ('Invalid email format');
    }
}

function validateTermsAndConditions(terms) {
    if (typeof terms !== 'boolean') {
        return ('Terms and conditions must be a boolean');
    } else if (terms) {
        return "Accepted";
    } else {
        return "Not accepted";
    }
}

function validateDateOfBirth(date) {
    if (typeof date !== 'string') {
        return ('Date of birth must be a string');
    }

    if (date.includes('/') && date.length === 10) {
        const dateParts = date.split('/');
        if (dateParts.length === 3) {
            const year = Number(dateParts[0]);
            const month = Number(dateParts[1]);
            const day = Number(dateParts[2]);
            if (year > 1900 && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
                return date;
            } else {
                return ('Invalid date of birth format');
            }
        } else {
            return ('Invalid date of birth format');
        }
    } else {
        return ('Invalid date of birth format');
    }
}

const data = 'Luis';
const data2 = false;

console.log(validatename(data));
console.log(validatePhoneNumber(data));
console.log(validateEmail(data));
console.log(validateTermsAndConditions(data2));
console.log(validateDateOfBirth(data));



