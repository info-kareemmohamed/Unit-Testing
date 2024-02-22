const User = require('../lab2')

describe("User", function () {
    let user;

    beforeEach(function () {
        user = new User("John", "password");
    });

    describe('addToCart', () => {
        it('should add a product to the cart', () => {
            const product = { name: 'Product 1', price: 10 };
            user.addToCart(product);
            expect(user.cart.length).toBe(1);
            expect(user.cart[0]).toEqual(product);
        });
    });


    describe('calculateTotalCartPrice', () => {
        it('should return 0 for an empty cart', () => {
            expect(user.calculateTotalCartPrice()).toBe(0);
        });

        it('should return the correct total price for products in the cart', () => {
            user.addToCart({ name: 'Product 1', price: 10 });
            user.addToCart({ name: 'Product 2', price: 20 });
            expect(user.calculateTotalCartPrice()).toBe(30);
        });
    });


    describe("These are test cases for checkout function paymentModel", () => {
        it("paymentModel methods should be called", () => {
          let paymentModel = jasmine.createSpyObj([
            "goToVerifyPage",
            "returnBack",
            "isVerify",
          ]);
          paymentModel.isVerify.and.returnValue(true);
    
          paymentModel.returnBack.and.callFake(function () {
            return true;
          });
    
          const result = user.checkout(paymentModel);
    
          expect(paymentModel.goToVerifyPage).toHaveBeenCalledTimes(1);
          expect(paymentModel.returnBack).toHaveBeenCalledTimes(1);
          expect(paymentModel.isVerify).toHaveBeenCalledTimes(1);
          expect(result).toBe(true);
        });
      });



});
