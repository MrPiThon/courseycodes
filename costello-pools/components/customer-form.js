// This class represents a users contact-us form

class CustomerForm {
    constructor(firstName, lastName, email, serviceType, subscribed, comments) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.serviceType = serviceType;
        this.subscribed = subscribed;
        this.comments = comments;
    }

    toString() {
        return "customer.firstName -> " + this.firstName + "\n" +
            "customer.lastName -> " + this.lastName + "\n" +
            "customer.email -> " + this.email + "\n" +
            "customer.serviceType -> " + this.serviceType + "\n" +
            "customer.subscribed -> " + this.subscribed + "\n" +
            "customer.comments -> " + this.comments + "\n";
    }

    display() {
        console.log(this.toString())
    }

    send() {
        // this will send an appropriate email
    }
}