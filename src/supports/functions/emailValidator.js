// HARUS MEMILIKI @
// ADA STRING SEBELUM DAN SESUDAH @
// ADA TITIK SETELAH @
// ADA STRING SETELAH TITIK

// rendytf@example.com
// rendytf@example.com
// rendytf.id@example.com
// rendy_tf@example.com

function emailValidator(email) {
    let emailSplit = email.split('@')
    if (emailSplit.length !== 2) return false

    for (let i = 0; i < emailSplit.length; i++) {
        // validation berdasarkan @
        if (emailSplit[i] === '') {
            return false
        }

        // validation berdasarkan .
        if (i === 1) {
            let hostingSplit = emailSplit[i].split('.')

            if (hostingSplit.length !== 2) {
                return false
            }

            if (hostingSplit[i] === '') {
                return false
            }
        }    
    }

    return true
}

export default emailValidator