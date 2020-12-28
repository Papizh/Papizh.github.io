(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<ngx-spinner bdColor=\"rgba(0,0,0,0.2)\" size=\"large\" color=\"#0b0909\" type=\"ball-spin\" [fullScreen]=\"true\">\n    <p style=\"color: white\"> Loading... </p>\n</ngx-spinner>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/address-display/address-display.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/address-display/address-display.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"address\">\n  <h3 class=\"mt32 mb0\">Address</h3>\n\n  <div fxLayout=\"row\" fxLayoutGap=\"64px\">\n    <div fxLayout=\"column\">\n      <h4>Name</h4>\n      {{ address.name }}\n      <div *ngFor=\"let line of address.addressLines; let i = index\">\n        <h4>Address line {{ i + 1 }}</h4>\n        {{ address.addressLines[i] }}\n      </div>\n    </div>\n    <div fxLayout=\"column\">\n      <h4>Post code</h4>\n      {{ address.postCode }}\n      <h4>City</h4>\n      {{ address.city }}\n      <h4>Country</h4>\n      {{ address.country }}\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/address-form/address-form.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/address-form/address-form.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3 style=\"text-align:center; color: #000; font-size: 3em;\nfont-weight: 600\">Доставка</h3>\n<form style='text-align: center;margin-top: 13px;' (ngSubmit)=\"onSubmit()\" #addressForm=\"ngForm\" fxLayout\n    fxLayout=\"column\" fxLayoutGap=\"16px\">\n    <mat-form-field>\n        <input #nameField=\"ngModel\" type=\"text\" matInput placeholder=\"Введіть ім'я\" required [(ngModel)]=\"address.name\"\n            name=\"name\" [disabled]=\"isReadOnly\" />\n        <mat-error *ngIf=\"nameField.invalid && nameField.errors['required']\">\n            Ім'я є обовязкове\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input #addressLine1Field=\"ngModel\" type=\"text\" matInput placeholder=\"Адреса\" required\n            [(ngModel)]=\"address.addressLines[0]\" name=\"addressLine1\" [disabled]=\"isReadOnly\" />\n        <mat-error *ngIf=\"addressLine1Field.invalid && addressLine1Field.errors['required']\">\n            Адреса є обовязкова\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input #telField=\"ngModel\" type=\"text\" matInput minlength=\"10\" maxlength=\"13\" placeholder=\"Номер телефону\"\n            [(ngModel)]=\"address.addressLines[1]\" name=\"addressLine2\" [disabled]=\"isReadOnly\" required />\n        <mat-error *ngIf=\"telField.invalid && telField.errors['required']\">\n            Номер телефону є обовязковий\n        </mat-error>\n    </mat-form-field>\n    <button *ngIf=\"!isReadOnly\" style=\"background-color: black; color: white; margin-left: 15px;\" mat-flat-button\n        type=\"submit\" [disabled]=\"!addressForm.form.valid\"> Підтвердити замовлення\n    </button>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-orders/admin-orders.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-orders/admin-orders.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"blackLIne\"></div>\n<div class=\"container margin\" style=\"margin-top: 100px;\">\n    <h3> Наші замовлення</h3>\n    <div class=\"section\">\n        <div>\n            <div class=\"margin\" *ngFor=\"let order of orders\">\n                <div class=\"timeStyle\">{{order.date| date:'dd.MM.yyyy H:mm' }}</div>\n                <div class=\"styleHeader\">\n                    <div>Ім'я - {{order.address.name}}</div>\n                    <div>Адреса - {{order.address.addressLines[0]}}</div>\n                    <div>Номер телефону: {{order.address.addressLines[1]}}</div>\n\n                </div>\n                <div class=\"styleProduct\">\n                    <div class=\"itemOrder\"> Категорія </div>\n                    <div class=\"itemOrder\"> Назва </div>\n                    <div class=\"itemOrder\"> Кількість </div>\n                    <div class=\"itemOrder\"> Ціна </div>\n                </div>\n                <div class=\"productInfo\" *ngFor=\"let item of order.shoppingCartItems\">\n                    <div class=\"styleOrderPrice\" *ngIf=\"item.product\">\n                        <img [src]=\"item.product.imageUrl\" alt=\"Product image\" />\n\n                        <div class=\"itemOrder\"> {{item.product.category.name}}</div>\n                        <div class=\"itemOrder\"> {{item.product.title}} </div>\n                        <div class=\"itemOrder paddingLeft\"> {{item.quantity}} </div>\n                        <div class=\"itemOrder\"> {{item.product.price}}</div>\n                    </div>\n                    <div>\n                    </div>\n                </div>\n                <div class=\"totalPrice\" ngForm='let order'>\n\n                    загальна ціна: <b> {{getTotalPrice(order)}}</b>грн\n                    <input class=\"styleInput\" type=\"checkbox\" [(ngModel)]=\"order.isReady\"\n                        [ngModelOptions]=\"{ standalone: true }\" (click)=\"changeCheckbox(order)\">\n                </div>\n                <hr>\n\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-products/admin-products.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-products/admin-products.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\n  <div class=\"section margin\">\n    <button routerLink=\"/admin/products/new\" style=\"background-color: black; color: white; margin-top: 5px;\">\n      New product\n    </button>\n    <mat-form-field>\n      <input matInput type=\"text\" (keyup)=\"applyFilter()\" placeholder=\"Filter\" [(ngModel)]=\"filterValue\" />\n      <button mat-button *ngIf=\"filterValue\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearFilter()\">\n        <mat-icon>close</mat-icon>\n      </button>\n    </mat-form-field>\n  </div>\n\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Title</th>\n      <td mat-cell *matCellDef=\"let product\">{{ product.title }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"category\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Category</th>\n      <td mat-cell *matCellDef=\"let product\">{{ product.category.name }}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"price\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Price</th>\n      <td style=\"padding-right:10px;\" mat-cell *matCellDef=\"let product\">\n        {{ product.price}}грн\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"weight\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Weight</th>\n      <td mat-cell *matCellDef=\"let product\">\n        {{  product.weight }}г\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Description</th>\n      <td mat-cell *matCellDef=\"let product\">\n        {{ product.description }}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"edit\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let product\">\n        <a [routerLink]=\"['/admin/products/', product.id]\">Edit</a>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: columnsToDisplay\"></tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[50, 20, 50]\" showFirstLastButtons>\n  </mat-paginator>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/product-form/product-form.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/product-form/product-form.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"section margin\">\n    <div fxFlex>\n      <form [formGroup]=\"productForm\" (ngSubmit)=\"onSubmit()\" fxLayout=\"column\" fxLayoutGap=\"16px\">\n        <mat-form-field>\n          <input type=\"text\" matInput placeholder=\"Title\" formControlName=\"titleControl\" required\n            (keyup)=\"onChange()\" />\n          <mat-error *ngIf=\"titleControl.invalid\">\n            {{ getErrorMessage(titleControl, 'Title') }}\n          </mat-error>\n        </mat-form-field>\n\n\n        <mat-form-field>\n          <input type=\"text\" matInput placeholder=\"Description\" formControlName=\"descriptionControl\" required\n            (keyup)=\"onChange()\" />\n          <mat-error *ngIf=\"descriptionControl.invalid\">\n            {{ getErrorMessage(descriptionControl, 'Description') }}\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input type=\"number\" matInput placeholder=\"Price\" formControlName=\"priceControl\" required\n            (keyup)=\"onChange()\" />\n          <span matSuffix>&nbsp;грн</span>\n          <mat-error *ngIf=\"priceControl.invalid\">\n            {{ getErrorMessage(priceControl, 'Price') }}\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field>\n          <input type=\"number\" matInput placeholder=\"Weight\" formControlName=\"weightControl\" required\n            (keyup)=\"onChange()\" />\n          <span matSuffix>&nbsp;г</span>\n          <mat-error *ngIf=\"weightControl.invalid\">\n            {{ getErrorMessage(weightControl, 'Weight') }}\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <input type=\"text\" matInput placeholder=\"Image URL\" formControlName=\"imageUrlControl\" required\n            (change)=\"onChange()\" />\n          <mat-error *ngIf=\"imageUrlControl.invalid\">\n            {{ getErrorMessage(imageUrlControl, 'Image URL') }}\n          </mat-error>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-select placeholder=\"Category\" formControlName=\"categoryControl\" required (selectionChange)=\"onChange()\">\n            <mat-option *ngFor=\"let cat of categories\" [value]=\"cat.id\">\n              {{ cat.name }}\n            </mat-option>\n          </mat-select>\n          <mat-error *ngIf=\"categoryControl.invalid\">\n            {{ getErrorMessage(categoryControl, 'Category') }}\n          </mat-error>\n        </mat-form-field>\n\n        <div fxLayout fxLayoutGap=\"10px\">\n          <button style=\"background-color: black; color: white; margin-top: 5px;\" type=\"submit\"\n            [disabled]=\"productForm.invalid\">\n            Save\n          </button>\n          <button style=\"background-color: black; color: white; margin-top: 5px;\" type=\"button\"\n            routerLink=\"/admin/products\">\n            Cancel\n          </button>\n          <div fxFlex></div>\n          <button type=\"button\" (click)=\"delete()\" *ngIf=\"product.id\" mat-flat-button color=\"warn\">\n            Delete\n          </button>\n        </div>\n      </form>\n    </div>\n    <div>\n      <app-product-card [product]=\"product\" [isAdminPreview]=\"true\"></app-product-card>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/check-out/check-out.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/check-out/check-out.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" class=\"margin\" fxLayout fxLayoutAlign=\"space-between start\" fxLayoutGap=\"32px\">\n  <app-address-form fxFlex (addressSubmitted)=\"onAddressSubmitted($event)\"></app-address-form>\n  <app-order-summary fxFlex [items$]=\"itemsSubject\"></app-order-summary>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"page-header\">\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\"\n            style=\"background-image: url('assets/img/backgraundMain.jpg');\">\n        </div>\n        <div class=\"container\">\n            <div class=\"content-center brand\">\n                <img class=\"n-logo\" src=\"assets/img/blackSushi.png\" alt=\"blackSushi\">\n                <!--                <h1 class=\"h1-seo\">Black Sushi & Pizza</h1>-->\n                <!--                <h3 class=\"h2\">Ми робимо найкращі суші для ВАС</h3>-->\n            </div>\n        </div>\n    </div>\n    <div class=\"main\">\n        <div class=\"section\">\n            <div class=\"container\">\n                <h1 style=\"text-align:center; color: #000; font-size: 3em;\n  font-weight: 600; \">\n                    <span style='font-family: \"Montserrat\", \"Helvetica Neue\", Arial, sans-serif;'>МЕНЮ</span>\n                    <hr style=\"color: gray\">\n                </h1>\n                <app-home></app-home>\n            </div>\n        </div>\n\n        <div class=\"section\" style=\"background: #f1f1f1;\">\n            <h3 style=\"text-align:center; \n            color: #000;\n            font-size: 3em;\n            font-weight: 600;\n            margin-bottom: 8px;\">Карта з зонами доставки</h3>\n            <div style=\"\n            color: green;\n            text-align: center;\n            font-size:20px;\n            \"><span>Зелена зона - безкоштовна доставка від 300грн.</span></div>\n            <div style=\"\n            color:#e6b112;\n            text-align: center;\n            font-size:20px;\n            margin-bottom: 10px;\n             \"><span>Жовта зона - безкоштовна доставка від 600грн.</span></div>\n            <div class=\"container\">\n\n                <div class=\"container-right\">\n                    <iframe src=\"https://www.google.com/maps/d/embed?mid=1hjewtqx2WsWTBdRrpLg6q4xrKqex8JwW\" width=\"100%\"\n                        height=\"600px\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\"\n                        tabindex=\"0\"></iframe>\n                </div>\n            </div>\n        </div>\n        <div class=\"section\">\n            <div class=\"container\">\n                <div class=\"elfsight-app-d6cbb41a-6d95-46e7-a5f7-958ad58c7a46\"></div>\n                <div class=\"free\"\n                    style=\"position: absolute; background: white; display: block;height: 40px; width: 1000px;z-index: 99999; margin-top: -46px;\">\n                </div>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer\" style=\"background-color: #000000;\">\n        <div class=\"container\" style=\" justify-content: center;display: flex;\">\n            <div class=\" copyright\" style=\"color: white; text-align: center; font-size: 15px;\">\n                &copy;{{data | date: 'yyyy'}} Black Sushi & Pizza. All rights reserved.\n            </div>\n        </div>\n    </footer>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner bdColor=\"rgba(0,0,0,0.2)\" size=\"large\" color=\"#0b0909\" type=\"ball-spin\" [fullScreen]=\"true\">\n    <p style=\"color: white\"> Loading... </p>\n</ngx-spinner>\n<div class=\"flex\">\n    <div class=\"container post\">\n        <mat-radio-group [(ngModel)]=\"selectedCategoryId\" (change)=\"onSelectedCategoryChange()\">\n            <mat-radio-button value=\"\">\n                Всі категорії\n            </mat-radio-button>\n            <mat-radio-button class=\"padding\" *ngFor=\"let category of (categories$ | async)\" [value]=\"category.id\">\n                <div class=\"\"> {{ category.name}} </div>\n            </mat-radio-button>\n        </mat-radio-group>\n    </div>\n    <div style=\"display: -webkit-flex;\n         flex-flow: row wrap;\n         -webkit-flex-flow: row wrap;\n         -webkit-align-content: flex-end;\n         display: flex;\n         align-content: flex-end;\n         justify-content: space-between\">\n        <app-product-card *ngFor=\"let product of (products$ | async)\" [product]=\"product\"></app-product-card>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-orders/my-orders.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-orders/my-orders.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h2 class=\"mt0\">My Orders</h2>\n  <ng-template #ordersTable>\n    <!-- TODO: set all columns width to either a fixed size or a percentage -->\n    <table mat-table [dataSource]=\"dataSource\" multiTemplateDataRows matSort>\n      <ng-container matColumnDef=\"products\">\n        <th mat-header-cell *matHeaderCellDef>Products</th>\n        <td mat-cell *matCellDef=\"let order\">\n          <div *ngIf=\"order.shoppingCartItems.length > 1; else singleItem\">\n            <span *ngIf=\"order === expandedOrder\">v</span>\n            <span *ngIf=\"order !== expandedOrder\"></span>\n            &nbsp;{{ order.shoppingCartItems.length }} different products, {{ countItems(order) }} items\n          </div>\n          <ng-template #singleItem>\n            {{ order.shoppingCartItems[0].quantity }}x\n            {{ order.shoppingCartItems[0].product.title }}\n          </ng-template>\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"totalPrice\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Total price</th>\n        <td mat-cell *matCellDef=\"let order\">{{ getTotalPrice(order) | currency: 'USD':'symbol'}}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"date\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Date</th>\n        <td mat-cell *matCellDef=\"let order\">{{ order.date | date: 'yyyy-MM-dd HH:mm:ss' }}</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"link\">\n        <th mat-header-cell *matHeaderCellDef></th>\n        <td mat-cell *matCellDef=\"let order\">\n          <a [routerLink]=\"order.id\">View order</a>\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"expandedDetail\">\n        <td\n          mat-cell\n          *matCellDef=\"let order\"\n          [attr.colspan]=\"columnsToDisplay.length\"\n        >\n          <div\n            class=\"order-detail\"\n            [@detailExpand]=\"order == expandedOrder ? 'expanded' : 'collapsed'\"\n          >\n            <ul class=\"ml0 pl0\">\n              <li *ngFor=\"let item of order.shoppingCartItems\">\n                <span *ngIf=\"item.quantity > 1\">{{ item.quantity }}x </span\n                >{{ item.product.title }}\n              </li>\n            </ul>\n          </div>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n      <tr\n        mat-row\n        *matRowDef=\"let order; columns: columnsToDisplay\"\n        class=\"order-row\"\n        [class.clickable]=\"order.shoppingCartItems.length > 1\"\n        (click)=\"onOrderClicked(order)\"\n      ></tr>\n      <tr\n        mat-row\n        *matRowDef=\"let order; columns: ['expandedDetail']\"\n        class=\"detail-row\"\n      ></tr>\n    </table>\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons>\n    </mat-paginator>\n  </ng-template>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-review/order-review.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-review/order-review.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <h2 class=\"mt0\">Order review</h2>\n  <div *ngIf=\"order; else notFound\">\n    <p class=\"mb32\">You are reviewing your order with ID {{ orderId }}</p>\n    <div fxLayout fxLayoutAlign=\"space-between start\" fxLayoutGap=\"32px\">\n      <app-address-form [address$]=\"addressSubject\" [isReadOnly]=\"true\" fxFlex></app-address-form>\n      <app-order-summary fxFlex [items$]=\"itemsSubject\"></app-order-summary>\n    </div>\n  </div>\n\n  <!-- TODO: show a spinner instead of not found. Only show not found it's really 404 -->\n  <ng-template #notFound>\n    <p>This order doesn't exist.</p>\n  </ng-template>\n\n  <div fxLayout fxLayoutAlign=\"start start\" fxLayoutGap=\"32px\" class=\"mt32\">\n    <button routerLink=\"/my-orders\" mat-flat-button color=\"accent\">\n      View all my orders\n    </button>\n    <button routerLink=\"/\" mat-flat-button color=\"primary\">\n      Back to the shop\n    </button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-success/order-success.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-success/order-success.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container margin\">\n  <h3 style=\"text-align:center; color: #000; font-size: 3em;\n  font-weight: 600\">Дякуємо!</h3>\n  <p style='font-size: 18px;'>Ваше замовлення прийняте.</p>\n  <h2>Очікуйте дзвінка оператора.</h2>\n  <div fxLayout fxLayoutGap=\"16px\">\n    <button style=\"background-color: black; color: white; margin-top: 25px\" routerLink=\"/\" mat-flat-button>\n      ГОЛОВНА\n    </button>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-summary/order-summary.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-summary/order-summary.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxLayoutAlign=\"start stretch\" fxLayoutGap=\"32px\">\n  <p class=\"textCenter\" *ngIf=\"totalQuantity === 1\">Це замовлення складається з 1 товару</p>\n  <p class=\"textCenter\" *ngIf=\"totalQuantity > 1\">Це замовлення складається з {{ totalQuantity }} товарів.</p>\n  <div class=\"styleTable\">\n    <table mat-table [dataSource]=\"dataSource\">\n      <ng-container matColumnDef=\"quantityAndName\">\n        <td mat-cell *matCellDef=\"let item\">{{ item.quantity}} x {{ item.product.category.name }} -\n          {{ item.product.title }}\n        </td>\n        <td mat-footer-cell *matFooterCellDef>Загалом</td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"price\">\n        <td mat-cell *matCellDef=\"let item\">\n          {{ item.quantity * item.product.price  }} грн\n        </td>\n        <td mat-footer-cell *matFooterCellDef>{{ totalPrice }} грн</td>\n      </ng-container>\n\n      <tr mat-row *matRowDef=\"let row; columns: columnsToDisplay\"></tr>\n      <tr mat-footer-row *matFooterRowDef=\"columnsToDisplay\"></tr>\n    </table>\n  </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product-card/product-card.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product-card/product-card.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"styleCard\">\n  <mat-card-header>\n    <mat-card-title>\n      {{ title }}\n    </mat-card-title>\n    <mat-card-subtitle>\n      {{ category }}\n    </mat-card-subtitle>\n  </mat-card-header>\n\n  <img [src]=\"imageUrl\" alt=\"\" />\n  <div class=\"styleDescription\" id=\"description\" (click)=\"clickOnDescription()\">{{ description }}</div>\n  <div class=\"styleContainer\">\n    <mat-card-content class=\"styleFontSize\">\n      {{ price }}грн\n    </mat-card-content>\n    <mat-card-content class=\"styleFontSize\">{{ weight }}г</mat-card-content>\n  </div>\n\n  <mat-card-actions *ngIf=\"!isAdminPreview\">\n    <div style=\"text-align: center\" fxLayoutAlign=\"center center\">\n      <button *ngIf=\"item.quantity === 0; else quantityArea\"\n        style=\"background-color: black; color: white;margin-bottom: 5px;\" mat-flat-button (click)=\"addToCart()\">\n        Добавити в корзину\n      </button>\n\n      <ng-template #quantityArea>\n        <app-quantity-selector [item]=\"item\" [suffixText]=\"'в корзині'\" (quantityPlusOne)=\"addToCart()\"\n          (quantityMinusOne)=\"removeFromCart()\"></app-quantity-selector>\n      </ng-template>\n    </div>\n  </mat-card-actions>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/products.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/products.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  products works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/quantity-selector/quantity-selector.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/quantity-selector/quantity-selector.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout fxLayoutAlign=\"start center\" fxLayoutGap=\"16px\">\n  <span\n    ><span class=\"quantity\">{{ item.quantity }}</span> {{ suffixText }}\n  </span>\n  <button\n    mat-stroked-button\n    color=\"primary\"\n    class=\".mat-elevation-z0\"\n    (click)=\"plusOne()\"\n  >\n    +1\n  </button>\n  <button\n    mat-stroked-button\n    color=\"primary\"\n    class=\".mat-elevation-z0\"\n    (click)=\"minusOne()\"\n  >\n    -1\n  </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/shopping-cart.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/shopping-cart.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\">\n    <ngx-spinner bdColor=\"rgba(0,0,0,0.2)\" size=\"large\" color=\"#0b0909\" type=\"ball-spin\" [fullScreen]=\"true\">\n        <p style=\"color: white\"> Loading... </p>\n    </ngx-spinner>\n    <div class=\"container margin\">\n        <h2 style=\"text-align:center; color: #000; font-size: 3em;\n        font-weight: 600; \">Корзина</h2>\n        <div fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\" fxLayoutGap=\"32px\">\n            <p class=\"textCenter\" *ngIf=\"!totalQuantity\">Ваша корзина порожня - зробіть, будь ласка, замовлення.</p>\n            <button *ngIf=\"!totalQuantity\" style=\"background-color: black; color: white;\" mat-flat-button\n                (click)=\" backToMain()\">Головна\n            </button>\n            <div class=\"padingTable\" *ngIf=\"totalQuantity > 0\">\n                <table mat-table [dataSource]=\"dataSource\">\n                    <ng-container matColumnDef=\"productImage\">\n                        <th mat-header-cell *matHeaderCellDef></th>\n                        <td mat-cell *matCellDef=\"let item\">\n                            <img [src]=\"item.product.imageUrl\" alt=\"Product image\" />\n                        </td>\n                        <td mat-footer-cell *matFooterCellDef></td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"categoryName\">\n                        <th mat-header-cell *matHeaderCellDef>Категорія</th>\n                        <td mat-cell *matCellDef=\"let item\">{{ item.product.category.name }}</td>\n                        <td mat-footer-cell *matFooterCellDef></td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"productName\">\n                        <th mat-header-cell *matHeaderCellDef>Назва</th>\n                        <td mat-cell *matCellDef=\"let item\">{{ item.product.title }}</td>\n                        <td mat-footer-cell *matFooterCellDef>Разом</td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"quantity\">\n                        <th mat-header-cell *matHeaderCellDef>Кількість</th>\n                        <td mat-cell *matCellDef=\"let item\" class=\"margin20px\">\n                            <app-quantity-selector [item]=\"item\" (quantityPlusOne)=\"onQuantityPlusOne(item)\"\n                                (quantityMinusOne)=\"onQuantityMinusOne(item)\"></app-quantity-selector>\n                        </td>\n                        <td mat-footer-cell *matFooterCellDef>{{ totalQuantity }}</td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"price\">\n                        <th mat-header-cell *matHeaderCellDef>Ціна</th>\n                        <td mat-cell *matCellDef=\"let item\">\n                            {{ item.product.price * item.quantity  }} грн\n                        </td>\n                        <td mat-footer-cell *matFooterCellDef>{{ totalPrice }} грн</td>\n                    </ng-container>\n\n                    <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: columnsToDisplay\"></tr>\n                    <tr mat-footer-row *matFooterRowDef=\"columnsToDisplay\"></tr>\n                </table>\n\n                <div class=\"padingMobile\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n                    <button routerLink=\"/check-out\" style=\"background-color: black; color: white; margin-top: 5px;\"\n                        mat-flat-button>Замовити\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav #navbar class=\"navbar navbar-expand-lg bg-primary fixed-top navbar-transparent\" color-on-scroll=\"500\">\n    <div class=\"container\">\n        <div class=\"dropdown button-dropdown\">\n            <div ngbDropdown>\n                <div ngbDropdownMenu>\n                    <a class=\"dropdown-header\">Dropdown header</a>\n                    <a class=\"dropdown-item\" href=\"tel:+380630494941\">80630494941 </a>\n                    <a class=\"dropdown-item\" href=\"#\" [routerLink]=\"['/']\">Головна</a>\n                    <a class=\"dropdown-item \" href=\"#\">Меню</a>\n                    <a class=\"dropdown-item\" href=\"#\">Доставка</a>\n                </div>\n            </div>\n        </div>\n        <div class=\"navbar-translate\">\n            <a (click)='onActivateBlack()' href=\"#\" class=\"navbar-brand logoP\" placement=\"bottom\">\n                Black Sushi & Pizza\n            </a>\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\"\n                aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\n                (click)=\"sidebarToggle()\">\n                <span class=\"navbar-toggler-bar bar1\"></span>\n                <span class=\"navbar-toggler-bar bar2\"></span>\n                <span class=\"navbar-toggler-bar bar3\"></span>\n            </button>\n        </div>\n        <div class=\"collapse navbar-collapse\" data-nav-image=\"assets/img/blurred-image-1.jpg\" data-color=\"orange\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item tel\">\n                    <a class=\"nav-link m-0\"><span>Графік роботи:</span> 12:00-22:00</a>\n                </li>\n                <li class=\"nav-item tel\">\n                    <a class=\"nav-link m-0\" href=\"tel:+380630494941\">(063) 049-49-41</a>\n                </li>\n                <li class=\"nav-item tel\">\n                    <a class=\"nav-link m-0\" href=\"tel:+380960494941\">(096) 049-49-41</a>\n                </li>\n                <li class=\"nav-item tel\">\n                    <a class=\"nav-link\" [routerLink]=\"['/']\" (click)='onActivate()'>\n                        <i class=\"now-ui-icons -home\"></i>\n                        <p>Головна</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [matBadge]=\"numberInCart\" [matBadgeHidden]=\"numberInCart < 1\"\n                        [routerLink]=\"['/shopping-cart']\">\n                        <i class=\"now-ui-icons shopping_cart-simple\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Корзина</p>\n                    </a>\n\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Ми в Facebook\" data-placement=\"bottom\" target=\"_blank\"\n                        href=\"https://www.facebook.com/blacksushilviv\">\n                        <i class=\"fab fa-facebook\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Facebook</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" rel=\"tooltip\" routerLink='admin/orders'>\n                        <i class=\"fas fa-bell\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Адмінка</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Ми в Instagram \" data-placement=\"bottom\"\n                        href=\"https://www.instagram.com/black_sushi_lviv\" target=\"_blank\">\n                        <i class=\"fab fa-instagram\"></i>\n                        <p class=\"d-lg-none d-xl-none\">Instagram</p>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shopping-cart/shopping-cart.component */ "./src/app/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _components_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/check-out/check-out.component */ "./src/app/components/check-out/check-out.component.ts");
/* harmony import */ var _components_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/order-success/order-success.component */ "./src/app/components/order-success/order-success.component.ts");
/* harmony import */ var _components_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/my-orders/my-orders.component */ "./src/app/components/my-orders/my-orders.component.ts");
/* harmony import */ var _components_order_review_order_review_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/order-review/order-review.component */ "./src/app/components/order-review/order-review.component.ts");
/* harmony import */ var _components_admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/admin/product-form/product-form.component */ "./src/app/components/admin/product-form/product-form.component.ts");
/* harmony import */ var _components_admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin/admin-products/admin-products.component */ "./src/app/components/admin/admin-products/admin-products.component.ts");
/* harmony import */ var _components_admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin/admin-orders/admin-orders.component */ "./src/app/components/admin/admin-orders/admin-orders.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");















// @ts-ignore
var routes = [
    { path: '', component: _components_components_component__WEBPACK_IMPORTED_MODULE_4__["ComponentsComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"] },
    { path: 'products', component: _components_products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"] },
    { path: 'shopping-cart', component: _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartComponent"] },
    { path: 'check-out', component: _components_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_7__["CheckOutComponent"] },
    { path: 'order-success', component: _components_order_success_order_success_component__WEBPACK_IMPORTED_MODULE_8__["OrderSuccessComponent"] },
    { path: 'order-review', component: _components_order_review_order_review_component__WEBPACK_IMPORTED_MODULE_10__["OrderReviewComponent"] },
    { path: 'my-orders', component: _components_my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_9__["MyOrdersComponent"] },
    { path: 'my-orders/:id', component: _components_order_review_order_review_component__WEBPACK_IMPORTED_MODULE_10__["OrderReviewComponent"] },
    { path: 'admin/products/new', component: _components_admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_11__["ProductFormComponent"] },
    { path: 'admin/products/:id', component: _components_admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_11__["ProductFormComponent"] },
    { path: 'admin/products', component: _components_admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_12__["AdminProductsComponent"] },
    { path: 'admin/orders', component: _components_admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_13__["AdminOrdersComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { useHash: false, relativeLinkResolution: 'legacy' })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");







var AppComponent = /** @class */ (function () {
    function AppComponent(spinner, renderer, router, document, element, location) {
        var _this = this;
        this.spinner = spinner;
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
        this.spinner.show();
        setTimeout(function () {
            /** spinner ends after 2 seconds */
            _this.spinner.hide();
        }, 1500);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 1500) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
        });
        var _location = this.location.path();
        _location = _location.split('/')[2];
        this.renderer.listen('window', 'scroll', function (event) {
            var number = window.scrollY;
            if (number > 120 || window.pageYOffset > 120 || _location !== '') {
                // add logic
                navbar.classList.remove('navbar-transparent');
            }
            else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"])
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");

 // this is needed!















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"],
            ],
            providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__["Meta"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/address-display/address-display.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/address-display/address-display.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkcmVzcy1kaXNwbGF5L2FkZHJlc3MtZGlzcGxheS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/address-display/address-display.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/address-display/address-display.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddressDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressDisplayComponent", function() { return AddressDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/address */ "./src/app/models/address.ts");



var AddressDisplayComponent = /** @class */ (function () {
    function AddressDisplayComponent() {
    }
    AddressDisplayComponent.prototype.ngOnInit = function () {
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _models_address__WEBPACK_IMPORTED_MODULE_2__["Address"])
    ], AddressDisplayComponent.prototype, "address", void 0);
    AddressDisplayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-address-display',
            template: __importDefault(__webpack_require__(/*! raw-loader!./address-display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/address-display/address-display.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./address-display.component.scss */ "./src/app/components/address-display/address-display.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AddressDisplayComponent);
    return AddressDisplayComponent;
}());



/***/ }),

/***/ "./src/app/components/address-form/address-form.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/address-form/address-form.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  margin-top: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGRyZXNzLWZvcm0vQzpcXFVzZXJzXFxkb21pbnVzXFxibGFja1N1c2hpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhZGRyZXNzLWZvcm1cXGFkZHJlc3MtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkcmVzcy1mb3JtL2FkZHJlc3MtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/address-form/address-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/address-form/address-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddressFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressFormComponent", function() { return AddressFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_address__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/address */ "./src/app/models/address.ts");




var AddressFormComponent = /** @class */ (function () {
    function AddressFormComponent() {
        this.addressSubmitted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.address = new _models_address__WEBPACK_IMPORTED_MODULE_3__["Address"]();
        this.address.addressLines = [];
    }
    AddressFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.address$) {
            this.addressSubscription = this.address$.subscribe(function (address) { return (_this.address = address); });
        }
    };
    AddressFormComponent.prototype.ngOnDestroy = function () {
        if (this.addressSubscription) {
            this.addressSubscription.unsubscribe();
        }
    };
    AddressFormComponent.prototype.onSubmit = function () {
        this.addressSubmitted.emit(this.address);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], AddressFormComponent.prototype, "isReadOnly", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"])
    ], AddressFormComponent.prototype, "address$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], AddressFormComponent.prototype, "addressSubmitted", void 0);
    AddressFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-address-form',
            template: __importDefault(__webpack_require__(/*! raw-loader!./address-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/address-form/address-form.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./address-form.component.scss */ "./src/app/components/address-form/address-form.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AddressFormComponent);
    return AddressFormComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/admin-orders/admin-orders.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/admin/admin-orders/admin-orders.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".blackLIne {\n  width: 100%;\n  height: 70px;\n  background-color: black; }\n\n.margin {\n  margin-top: 50px; }\n\nimg {\n  width: 75px;\n  height: 80px; }\n\n.timeStyle {\n  font-size: 18px;\n  font-weight: 600; }\n\n.styleHeader {\n  font-size: 20px;\n  font-weight: 600;\n  display: flex;\n  justify-content: space-between;\n  margin: 5px; }\n\n.styleOrder {\n  padding: 5px;\n  display: flex;\n  justify-content: space-between; }\n\n.styleProduct {\n  display: flex;\n  justify-content: space-between;\n  font-size: 21px;\n  font-weight: 600;\n  padding-left: 233px; }\n\n.styleOrderPrice {\n  display: flex;\n  justify-content: space-between; }\n\n.itemOrder {\n  width: 100px;\n  padding-top: 17px; }\n\n.paddingLeft {\n  text-align: center;\n  padding-left: 35px; }\n\nhr {\n  border-top: 3px solid #607d8b; }\n\n.navbar.navbar-transparent {\n  background-color: black !important; }\n\n.totalPrice {\n  display: flex;\n  justify-content: flex-end;\n  font-size: xx-large;\n  font-weight: 500; }\n\n.container {\n  font-size: 18px; }\n\nb {\n  padding-left: 10px; }\n\n.styleInput {\n  height: 40px;\n  width: 40px;\n  margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1vcmRlcnMvQzpcXFVzZXJzXFxkb21pbnVzXFxibGFja1N1c2hpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhZG1pblxcYWRtaW4tb3JkZXJzXFxhZG1pbi1vcmRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QixFQUFBOztBQUUzQjtFQUNJLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QixFQUFBOztBQUVsQztFQUNJLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxhQUFhO0VBQ2IsOEJBQThCLEVBQUE7O0FBRWxDO0VBQ0ksWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSw2QkFBNkIsRUFBQTs7QUFFakM7RUFDSSxrQ0FBa0MsRUFBQTs7QUFFdEM7RUFDSSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4tb3JkZXJzL2FkbWluLW9yZGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibGFja0xJbmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbi5tYXJnaW4ge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG5pbWcge1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGhlaWdodDogODBweDtcbn1cblxuLnRpbWVTdHlsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uc3R5bGVIZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogNXB4O1xufVxuXG4uc3R5bGVPcmRlciB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnN0eWxlUHJvZHVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZy1sZWZ0OiAyMzNweDtcbn1cblxuLnN0eWxlT3JkZXJQcmljZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaXRlbU9yZGVyIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgcGFkZGluZy10b3A6IDE3cHg7XG59XG5cbi5wYWRkaW5nTGVmdCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMzVweDtcbn1cbmhyIHtcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgIzYwN2Q4Yjtcbn1cbi5uYXZiYXIubmF2YmFyLXRyYW5zcGFyZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuLnRvdGFsUHJpY2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jb250YWluZXIge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbmIge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5zdHlsZUlucHV0IHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/admin/admin-orders/admin-orders.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin/admin-orders/admin-orders.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdminOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrdersComponent", function() { return AdminOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/order.service */ "./src/app/services/order.service.ts");



var AdminOrdersComponent = /** @class */ (function () {
    function AdminOrdersComponent(orderService) {
        this.orderService = orderService;
    }
    Object.defineProperty(AdminOrdersComponent.prototype, "category", {
        get: function () {
            return this.item.product
                ? this.item.product.category
                    ? this.item.product.category.name
                    : 'Category'
                : 'Category';
        },
        enumerable: false,
        configurable: true
    });
    AdminOrdersComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    AdminOrdersComponent.prototype.getData = function () {
        var _this = this;
        this.orderService.getOrders().subscribe(function (order) {
            _this.orders = order;
            return _this.orders.sort(function (a, b) {
                return new Date(b.date) - new Date(a.date);
            });
        });
    };
    AdminOrdersComponent.prototype.changeCheckbox = function (order) {
        order.isReady = !order.isReady;
        console.log(order);
    };
    AdminOrdersComponent.prototype.countItems = function (order) {
        return order.shoppingCartItems.reduce(function (sum, item) { return (sum += item.quantity); }, 0);
    };
    AdminOrdersComponent.prototype.getTotalPrice = function (order) {
        return order.shoppingCartItems.reduce(function (sum, item) { return (sum += item.quantity * item.product.price); }, 0);
    };
    AdminOrdersComponent.ctorParameters = function () { return [
        { type: _services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"] }
    ]; };
    AdminOrdersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-orders',
            template: __importDefault(__webpack_require__(/*! raw-loader!./admin-orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-orders/admin-orders.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./admin-orders.component.scss */ "./src/app/components/admin/admin-orders/admin-orders.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]])
    ], AdminOrdersComponent);
    return AdminOrdersComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/admin-products/admin-products.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/admin/admin-products/admin-products.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-column-price {\n  width: 70px;\n  text-align: right; }\n\n.mat-column-edit {\n  width: 50px;\n  text-align: right; }\n\na {\n  color: #673ab7;\n  text-decoration: none; }\n\n.new-product-row {\n  margin-bottom: 16px; }\n\n.new-product-row mat-form-field {\n    max-width: 180px;\n    min-width: 64px; }\n\n.margin {\n  margin: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi1wcm9kdWN0cy9DOlxcVXNlcnNcXGRvbWludXNcXGJsYWNrU3VzaGkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFkbWluXFxhZG1pbi1wcm9kdWN0c1xcYWRtaW4tcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsV0FBVztFQUNYLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTs7QUFHdkI7RUFNRSxtQkFBbUIsRUFBQTs7QUFOckI7SUFFSSxnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBOztBQU1uQjtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4tcHJvZHVjdHMvYWRtaW4tcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNvbHVtbi1wcmljZSB7XG4gIHdpZHRoOiA3MHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1hdC1jb2x1bW4tZWRpdCB7XG4gIHdpZHRoOiA1MHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjNjczYWI3O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5uZXctcHJvZHVjdC1yb3cge1xuICBtYXQtZm9ybS1maWVsZCB7XG4gICAgbWF4LXdpZHRoOiAxODBweDtcbiAgICBtaW4td2lkdGg6IDY0cHg7XG4gIH1cblxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ubWFyZ2luIHtcbiAgbWFyZ2luOiA1MHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/admin/admin-products/admin-products.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/admin/admin-products/admin-products.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductsComponent", function() { return AdminProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");






var AdminProductsComponent = /** @class */ (function () {
    function AdminProductsComponent(productService) {
        var _this = this;
        this.productService = productService;
        this.columnsToDisplay = ['title', 'category', 'price', 'weight', 'edit'];
        this.fieldsToFilter = ['title', 'category', 'price'];
        this.customFilterPredicate = function (data, filter) {
            var allValues = _this.fieldsToFilter.reduce(function (text, field) {
                return (text += (data[field] + '').trim().toLowerCase());
            }, '');
            return allValues.includes(filter);
        };
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    }
    AdminProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.productService
            .getAllPopulatedProducts()
            .subscribe(function (products) { return (_this.dataSource.data = products); });
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.filterPredicate = this.customFilterPredicate;
    };
    AdminProductsComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    AdminProductsComponent.prototype.applyFilter = function () {
        this.dataSource.filter = this.filterValue.trim().toLowerCase();
    };
    AdminProductsComponent.prototype.clearFilter = function () {
        this.filterValue = '';
        this.applyFilter();
    };
    AdminProductsComponent.ctorParameters = function () { return [
        { type: _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], AdminProductsComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], AdminProductsComponent.prototype, "sort", void 0);
    AdminProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-products',
            template: __importDefault(__webpack_require__(/*! raw-loader!./admin-products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/admin-products/admin-products.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./admin-products.component.scss */ "./src/app/components/admin/admin-products/admin-products.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]])
    ], AdminProductsComponent);
    return AdminProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/product-form/product-form.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/admin/product-form/product-form.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\n  width: 300px; }\n  mat-card img {\n    width: 300px;\n    height: 300px;\n    -o-object-fit: contain;\n       object-fit: contain; }\n  .margin {\n  margin: 70px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9wcm9kdWN0LWZvcm0vQzpcXFVzZXJzXFxkb21pbnVzXFxibGFja1N1c2hpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxhZG1pblxccHJvZHVjdC1mb3JtXFxwcm9kdWN0LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLEVBQUE7RUFEZDtJQUlJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQW1CO09BQW5CLG1CQUFtQixFQUFBO0VBR3ZCO0VBQ0UsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9wcm9kdWN0LWZvcm0vcHJvZHVjdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xuICB3aWR0aDogMzAwcHg7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICB9XG59XG4ubWFyZ2luIHtcbiAgbWFyZ2luOiA3MHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/admin/product-form/product-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin/product-form/product-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function() { return ProductFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/__ivy_ngcc__/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_firebase_objects_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/firebase-objects/product */ "./src/app/models/firebase-objects/product.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");









var ProductFormComponent = /** @class */ (function () {
    function ProductFormComponent(categoryService, productService, router, route) {
        var _this = this;
        this.categoryService = categoryService;
        this.productService = productService;
        this.router = router;
        this.route = route;
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            titleControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            descriptionControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            priceControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(0)]),
            weightControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(0)]),
            categoryControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            imageUrlControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ng2_validation__WEBPACK_IMPORTED_MODULE_5__["CustomValidators"].url,
            ]),
        });
        this.categories = [];
        this.product = new _models_firebase_objects_product__WEBPACK_IMPORTED_MODULE_6__["Product"]();
        this.categoriesSubscription = this.categoryService
            .getAll()
            .subscribe(function (categories) { return (_this.categories = categories); });
        var id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.product.id = id;
            this.productsSubscription = this.productService
                .get(id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
                .subscribe(function (product) {
                if (product) {
                    _this.product = product;
                    _this.product.category = _this.getCategoryById(product.categoryId);
                    _this.productForm.get('titleControl').setValue(product.title);
                    _this.productForm.get('descriptionControl').setValue(product.description);
                    _this.productForm.get('priceControl').setValue(product.price);
                    _this.productForm.get('weightControl').setValue(product.weight);
                    _this.productForm
                        .get('categoryControl')
                        .setValue(product.categoryId);
                    _this.productForm.get('imageUrlControl').setValue(product.imageUrl);
                }
            });
        }
    }
    Object.defineProperty(ProductFormComponent.prototype, "titleControl", {
        get: function () {
            return this.productForm.get('titleControl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductFormComponent.prototype, "priceControl", {
        get: function () {
            return this.productForm.get('priceControl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductFormComponent.prototype, "weightControl", {
        get: function () {
            return this.productForm.get('weightControl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductFormComponent.prototype, "descriptionControl", {
        get: function () {
            return this.productForm.get('descriptionControl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductFormComponent.prototype, "categoryControl", {
        get: function () {
            return this.productForm.get('categoryControl');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductFormComponent.prototype, "imageUrlControl", {
        get: function () {
            return this.productForm.get('imageUrlControl');
        },
        enumerable: false,
        configurable: true
    });
    ProductFormComponent.prototype.ngOnDestroy = function () {
        // TODO: check all subscriptions before unsubscribing
        if (this.categoriesSubscription) {
            this.categoriesSubscription.unsubscribe();
        }
        if (this.productsSubscription) {
            this.productsSubscription.unsubscribe();
        }
    };
    ProductFormComponent.prototype.onChange = function () {
        this.product.title = this.titleControl.value;
        this.product.categoryId = this.categoryControl.value;
        this.product.category = this.getCategoryById(this.categoryControl.value);
        this.product.price = this.priceControl.value;
        this.product.weight = this.weightControl.value;
        this.product.description = this.descriptionControl.value;
        this.product.imageUrl = this.imageUrlControl.valid
            ? this.imageUrlControl.value
            : '';
    };
    ProductFormComponent.prototype.onSubmit = function () {
        var productToSave = {
            title: this.product.title,
            price: this.product.price,
            weight: this.product.weight,
            categoryId: this.product.categoryId,
            imageUrl: this.product.imageUrl,
            description: this.product.description
        };
        if (this.product.id) {
            this.productService.update(this.product.id, productToSave);
        }
        else {
            this.productService.create(productToSave);
        }
        this.router.navigate(['/admin/products']);
    };
    ProductFormComponent.prototype.delete = function () {
        if (!confirm('Are you sure you want to delete this product?')) {
            return;
        }
        this.productService.delete(this.product.id);
        this.router.navigate(['/admin/products']);
    };
    ProductFormComponent.prototype.getErrorMessage = function (control, fieldName) {
        if (control.hasError('required')) {
            return fieldName + " is required";
        }
        if (control.hasError('min')) {
            return fieldName + " must have a minimum value of " + control.errors.min.min;
        }
        if (control.hasError('url')) {
            return fieldName + " must be a valid URL";
        }
        return '';
    };
    ProductFormComponent.prototype.getCategoryById = function (id) {
        if (!id) {
            return null;
        }
        return this.categories.find(function (category) { return category.id === id; });
    };
    ProductFormComponent.ctorParameters = function () { return [
        { type: _services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"] },
        { type: _services_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    ProductFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-form',
            template: __importDefault(__webpack_require__(/*! raw-loader!./product-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/product-form/product-form.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./product-form.component.scss */ "./src/app/components/admin/product-form/product-form.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProductFormComponent);
    return ProductFormComponent;
}());



/***/ }),

/***/ "./src/app/components/check-out/check-out.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/check-out/check-out.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".margin {\n  padding: 75px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGVjay1vdXQvQzpcXFVzZXJzXFxkb21pbnVzXFxibGFja1N1c2hpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjaGVjay1vdXRcXGNoZWNrLW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hlY2stb3V0L2NoZWNrLW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4ge1xuICAgIHBhZGRpbmc6IDc1cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/check-out/check-out.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/check-out/check-out.component.ts ***!
  \*************************************************************/
/*! exports provided: CheckOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutComponent", function() { return CheckOutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _models_firebase_objects_order__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/firebase-objects/order */ "./src/app/models/firebase-objects/order.ts");








var CheckOutComponent = /** @class */ (function () {
    function CheckOutComponent(orderService, cartService, router) {
        var _this = this;
        this.orderService = orderService;
        this.cartService = cartService;
        this.router = router;
        this.cartService.initialize().then(function () {
            cartService
                .getNumberOfItemsInCart()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
                .subscribe(function (num) {
                if (!num) {
                    console.error('Tried to access check-out without any items in the shopping cart');
                    router.navigate(['/']);
                }
            });
            _this.itemsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
            _this.itemsSubscription = cartService.getAllItems().subscribe(function (items) {
                _this.itemsSubject.next(items);
            });
        });
    }
    CheckOutComponent.prototype.ngOnDestroy = function () {
        if (this.itemsSubscription) {
            this.itemsSubscription.unsubscribe();
        }
        if (this.authSubscription) {
            this.authSubscription.unsubscribe();
        }
        this.itemsSubject.complete();
    };
    CheckOutComponent.prototype.onAddressSubmitted = function (address) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var order, docRef;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        order = new _models_firebase_objects_order__WEBPACK_IMPORTED_MODULE_7__["Order"]();
                        order.address = address;
                        order.shoppingCartItems = this.itemsSubject.value;
                        order.date = new Date();
                        order.isReady = false;
                        return [4 /*yield*/, this.orderService.create(order)];
                    case 1:
                        docRef = _a.sent();
                        this.cartService.deleteCart();
                        this.router.navigate(['/order-success'], {
                            queryParams: { orderId: docRef.id },
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckOutComponent.ctorParameters = function () { return [
        { type: _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] },
        { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    CheckOutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-check-out',
            template: __importDefault(__webpack_require__(/*! raw-loader!./check-out.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/check-out/check-out.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./check-out.component.scss */ "./src/app/components/check-out/check-out.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"],
            _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CheckOutComponent);
    return CheckOutComponent;
}());



/***/ }),

/***/ "./src/app/components/components.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_4__);





var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(renderer, config, element, metaService) {
        this.renderer = renderer;
        this.element = element;
        this.metaService = metaService;
        this.data = new Date();
        this.page = 4;
        this.isCollapsed = true;
        this.isCollapsed1 = true;
        this.isCollapsed2 = true;
        this.state_icon_primary = true;
        config.closeOthers = true;
        config.type = 'info';
        this.addTag();
    }
    ComponentsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ComponentsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ComponentsComponent.prototype.addTag = function () {
        this.metaService.addTag({ name: 'title', content: 'BlackSushi - найбільші і найкращі суші у Львові! ' });
        this.metaService.addTag({ name: 'description', content: 'Замовляй найкращі суші у нас✅ Безкоштовна доставка суші✅ Замовити найсмачніші суші ☎0630494941 ☎0930494941 ✅ блек суші ми завжди з тобою' });
        this.metaService.addTag({ name: 'keywords', content: 'Cуші Львів' });
        this.metaService.addTag({ name: 'author', content: 'Ihor Papizh' });
        //  Open Graph / Facebook 
        this.metaService.addTag({ property: "og:type", content: 'website ' });
        this.metaService.addTag({ property: "og:url", content: 'http://blacksushi.com.ua/' });
        this.metaService.addTag({ property: "og:title", content: "BlackSushi - найбільші і найкращі суші у Львові! " });
        this.metaService.addTag({
            property: "og:description", content: "Замовляй найкращі суші у нас✅ Безкоштовна доставка суші✅ Замовити найсмачніші суші ☎0630494941 ☎0930494941"
        });
        this.metaService.addTag({ property: "og:image", content: "www.blacksushi.com.ua/assets/img/blacksushi.jpg" });
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_4__('.rellax-header');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('home-page');
    };
    ComponentsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('home-page');
    };
    ComponentsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAccordionConfig"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] }
    ]; };
    ComponentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-components',
            template: __importDefault(__webpack_require__(/*! raw-loader!./components.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html")).default,
            styles: ["\n        ngb-progressbar {\n            margin-top: 5rem;\n        }\n    "]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAccordionConfig"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _address_display_address_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./address-display/address-display.component */ "./src/app/components/address-display/address-display.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _address_form_address_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./address-form/address-form.component */ "./src/app/components/address-form/address-form.component.ts");
/* harmony import */ var _order_review_order_review_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order-review/order-review.component */ "./src/app/components/order-review/order-review.component.ts");
/* harmony import */ var _order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./order-summary/order-summary.component */ "./src/app/components/order-summary/order-summary.component.ts");
/* harmony import */ var _quantity_selector_quantity_selector_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./quantity-selector/quantity-selector.component */ "./src/app/components/quantity-selector/quantity-selector.component.ts");
/* harmony import */ var _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-card/product-card.component */ "./src/app/components/product-card/product-card.component.ts");
/* harmony import */ var _admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/product-form/product-form.component */ "./src/app/components/admin/product-form/product-form.component.ts");
/* harmony import */ var _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/admin-orders/admin-orders.component */ "./src/app/components/admin/admin-orders/admin-orders.component.ts");
/* harmony import */ var _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/admin-products/admin-products.component */ "./src/app/components/admin/admin-products/admin-products.component.ts");
/* harmony import */ var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./my-orders/my-orders.component */ "./src/app/components/my-orders/my-orders.component.ts");
/* harmony import */ var _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./order-success/order-success.component */ "./src/app/components/order-success/order-success.component.ts");
/* harmony import */ var _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./check-out/check-out.component */ "./src/app/components/check-out/check-out.component.ts");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/components/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./products/products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _services_shopping_cart_item_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../services/shopping-cart-item.service */ "./src/app/services/shopping-cart-item.service.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/storage/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
/* harmony import */ var app_services_order_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! app/services/order.service */ "./src/app/services/order.service.ts");

































var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ngx_spinner__WEBPACK_IMPORTED_MODULE_31__["NgxSpinnerModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_27__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_28__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_29__["AngularFirestoreModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_30__["AngularFireStorageModule"],
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [
                _components_component__WEBPACK_IMPORTED_MODULE_6__["ComponentsComponent"],
                _address_display_address_display_component__WEBPACK_IMPORTED_MODULE_7__["AddressDisplayComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_21__["ProductsComponent"],
                _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_20__["ShoppingCartComponent"],
                _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_19__["CheckOutComponent"],
                _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_18__["OrderSuccessComponent"],
                _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_17__["MyOrdersComponent"],
                _admin_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_16__["AdminProductsComponent"],
                _admin_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_15__["AdminOrdersComponent"],
                _admin_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_14__["ProductFormComponent"],
                _product_card_product_card_component__WEBPACK_IMPORTED_MODULE_13__["ProductCardComponent"],
                _quantity_selector_quantity_selector_component__WEBPACK_IMPORTED_MODULE_12__["QuantitySelectorComponent"],
                _address_form_address_form_component__WEBPACK_IMPORTED_MODULE_9__["AddressFormComponent"],
                _order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_11__["OrderSummaryComponent"],
                _order_review_order_review_component__WEBPACK_IMPORTED_MODULE_10__["OrderReviewComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_22__["HomeComponent"],
            ],
            exports: [_components_component__WEBPACK_IMPORTED_MODULE_6__["ComponentsComponent"]],
            providers: [
                _services_category_service__WEBPACK_IMPORTED_MODULE_23__["CategoryService"],
                _services_product_service__WEBPACK_IMPORTED_MODULE_24__["ProductService"],
                _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_25__["ShoppingCartService"],
                _services_shopping_cart_item_service__WEBPACK_IMPORTED_MODULE_26__["ShoppingCartItemService"],
                app_services_order_service__WEBPACK_IMPORTED_MODULE_32__["OrderService"],
            ],
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".full-height {\n  height: 100%; }\n\n.scroll {\n  overflow-y: hidden;\n  /*adds scroll to this container*/ }\n\n:host ::ng-deep .mat-radio-label .mat-radio-label-content {\n  padding-right: 10px;\n  padding-left: 5px;\n  font-size: 18px; }\n\n:host ::ng-deep mat-radio-button {\n  height: 29px; }\n\n:host ::ng-deep mat-radio-button:hover {\n  background-color: rgba(156, 153, 161, 0.2);\n  border-radius: 0.5rem; }\n\n:host ::ng-deep mat-radio-button:active {\n  background-color: rgba(156, 153, 161, 0.2);\n  border-radius: 0.5rem; }\n\n:host ::ng-deep .mat-radio-container {\n  margin-left: 9px; }\n\n.post {\n  display: flex;\n  justify-content: space-around; }\n\n@media (min-width: 500px) {\n  .post {\n    width: 33%;\n    display: flex;\n    justify-content: space-around; } }\n\n@media (min-width: 500px) {\n  :host ::ng-deep .mat-radio-group {\n    display: flex;\n    flex-direction: column; } }\n\n@media (min-width: 500px) {\n  .flex {\n    display: flex; } }\n\n@media (max-width: 500px) {\n  :host ::ng-deep .mat-radio-label .mat-radio-label-content {\n    padding-right: 15px;\n    padding-left: 5px; } }\n\n@media (max-width: 500px) {\n  .container {\n    padding-right: 5px;\n    padding-left: 5px; } }\n\n:host ::ng-deep .mat-radio-outer-circle {\n  border-color: #2f3238; }\n\n:host ::ng-deep .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #2f3238; }\n\n:host ::ng-deep .mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #2f3238; }\n\n:host ::ng-deep .mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #2f3238; }\n\n:host ::ng-deep .mat-radio-button:hover {\n  display: inline-block;\n  -webkit-tap-highlight-color: #2f3238;\n  outline: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcZG9taW51c1xcYmxhY2tTdXNoaS9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtCQUFrQjtFQUFFLGdDQUFBLEVBQWlDOztBQUd2RDtFQUVJLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUluQjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLDBDQUEwQztFQUMxQyxxQkFBcUIsRUFBQTs7QUFFdkI7RUFDRSwwQ0FBMEM7RUFDMUMscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFO0lBQ0UsVUFBVTtJQUNWLGFBQWE7SUFDYiw2QkFBNkIsRUFBQSxFQUM5Qjs7QUFFSDtFQUNFO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQixFQUFBLEVBQ3ZCOztBQUVIO0VBQ0U7SUFDRSxhQUFhLEVBQUEsRUFDZDs7QUFFSDtFQUNFO0lBRUksbUJBQW1CO0lBQ25CLGlCQUFpQixFQUFBLEVBQ2xCOztBQUlMO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCLEVBQUEsRUFDbEI7O0FBR0g7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxxQkFBcUI7RUFDckIsb0NBQW9DO0VBQ3BDLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtaGVpZ2h0IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2Nyb2xsIHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuOyAvKmFkZHMgc2Nyb2xsIHRvIHRoaXMgY29udGFpbmVyKi9cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtcmFkaW8tbGFiZWwge1xuICAubWF0LXJhZGlvLWxhYmVsLWNvbnRlbnQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG5cbjpob3N0IDo6bmctZGVlcCBtYXQtcmFkaW8tYnV0dG9uIHtcbiAgaGVpZ2h0OiAyOXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIG1hdC1yYWRpby1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMTUzLCAxNjEsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbn1cbjpob3N0IDo6bmctZGVlcCBtYXQtcmFkaW8tYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU2LCAxNTMsIDE2MSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1yYWRpby1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogOXB4O1xufVxuLnBvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gIC5wb3N0IHtcbiAgICB3aWR0aDogMzMlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xuICA6aG9zdCA6Om5nLWRlZXAgLm1hdC1yYWRpby1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcbiAgLmZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICA6aG9zdCA6Om5nLWRlZXAgLm1hdC1yYWRpby1sYWJlbCB7XG4gICAgLm1hdC1yYWRpby1sYWJlbC1jb250ZW50IHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgfVxufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICBib3JkZXItY29sb3I6ICMyZjMyMzg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMmYzMjM4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjMyMzg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmMzIzODtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtcmFkaW8tYnV0dG9uOmhvdmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6ICMyZjMyMzg7XG4gIG91dGxpbmU6IDA7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");








var HomeComponent = /** @class */ (function () {
    function HomeComponent(spinner, categoryService, productService, router, route, metaService) {
        var _this = this;
        this.spinner = spinner;
        this.categoryService = categoryService;
        this.productService = productService;
        this.router = router;
        this.metaService = metaService;
        this.addTag();
        // select all categories by default
        this.selectedCategoryId = '';
        this.categories$ = this.categoryService.getAll();
        // when the query params change, update the selected category and displayed products
        // this is also triggered on page load
        this.queryParamsSubscription = route.queryParams.subscribe(function (params) {
            _this.selectedCategoryId = params.category || '';
            _this.products$ = _this.productService.getPopulatedProductsByCategory(_this.selectedCategoryId);
        });
    }
    HomeComponent.prototype.addTag = function () {
        this.metaService.addTag({ name: 'title', content: 'BlackSushi - найбільші і найкращі суші у Львові! ' });
        this.metaService.addTag({ name: 'description', content: 'Замовляй найкращі суші у нас✅ Безкоштовна доставка суші✅ Замовити найсмачніші суші ☎0630494941 ☎0930494941' });
        this.metaService.addTag({ name: 'keywords', content: 'Cуші Львів' });
        this.metaService.addTag({ name: 'author', content: 'Ihor Papizh' });
        //  Open Graph / Facebook 
        this.metaService.addTag({ property: "og:type", content: 'website ' });
        this.metaService.addTag({ property: "og:url", content: 'http://blacksushi.com.ua/' });
        this.metaService.addTag({ property: "og:title", content: "BlackSushi - найбільші і найкращі суші у Львові! " });
        this.metaService.addTag({
            property: "og:description", content: "Замовляй найкращі суші у нас✅ Безкоштовна доставка суші✅ Замовити найсмачніші суші ☎0630494941 ☎0930494941"
        });
        this.metaService.addTag({ property: "og:image", content: "www.blacksushi.com.ua/assets/img/blacksushi.jpg" });
    };
    HomeComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_6__('.rellax-header');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('home-page');
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        if (this.queryParamsSubscription) {
            this.queryParamsSubscription.unsubscribe();
            var navbar = document.getElementsByTagName('nav')[0];
            navbar.classList.remove('navbar-transparent');
            var body = document.getElementsByTagName('body')[0];
            body.classList.remove('home-page');
        }
    };
    HomeComponent.prototype.onSelectedCategoryChange = function () {
        var _this = this;
        this.spinner.show();
        setTimeout(function () {
            /** spinner ends after 5 seconds */
            _this.spinner.hide();
        }, 1000);
        var queryParams = this.selectedCategoryId
            ? { category: this.selectedCategoryId }
            : null;
        this.router.navigate([], { queryParams: queryParams, });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] },
        { type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Meta"] }
    ]; };
    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Meta"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/my-orders/my-orders.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/my-orders/my-orders.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("li {\n  list-style: none; }\n\na {\n  -webkit-text-decoration-line: None;\n          text-decoration-line: None; }\n\ntr.detail-row {\n  height: 0; }\n\n.order-detail {\n  overflow: hidden;\n  display: flex; }\n\n.order-row td {\n  border-bottom-width: 0; }\n\n.clickable {\n  cursor: pointer; }\n\n.clickable:hover {\n  background: #efefef; }\n\n.mat-column-totalPrice {\n  width: 120px; }\n\n.mat-column-date {\n  width: 180px; }\n\n.mat-column-link {\n  width: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teS1vcmRlcnMvQzpcXFVzZXJzXFxkb21pbnVzXFxibGFja1N1c2hpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxteS1vcmRlcnNcXG15LW9yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtDQUEwQjtVQUExQiwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDRSxTQUFTLEVBQUE7O0FBR1g7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBOztBQUdmO0VBQ0Usc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXktb3JkZXJzL215LW9yZGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiBOb25lO1xufVxuXG50ci5kZXRhaWwtcm93IHtcbiAgaGVpZ2h0OiAwO1xufVxuXG4ub3JkZXItZGV0YWlsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm9yZGVyLXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi5jbGlja2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jbGlja2FibGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xufVxuXG4ubWF0LWNvbHVtbi10b3RhbFByaWNlIHtcbiAgd2lkdGg6IDEyMHB4O1xufVxuXG4ubWF0LWNvbHVtbi1kYXRlIHtcbiAgd2lkdGg6IDE4MHB4O1xufVxuXG4ubWF0LWNvbHVtbi1saW5rIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/my-orders/my-orders.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/my-orders/my-orders.component.ts ***!
  \*************************************************************/
/*! exports provided: MyOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function() { return MyOrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");






var MyOrdersComponent = /** @class */ (function () {
    function MyOrdersComponent(orderService) {
        this.orderService = orderService;
        this.columnsToDisplay = ['products', 'totalPrice', 'date', 'link'];
        this.fieldsToFilter = ['products', 'date', 'link'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
    }
    ;
    MyOrdersComponent.prototype.ngOnInit = function () {
        this.orderService.getAllForUser();
    };
    MyOrdersComponent.prototype.ngAfterViewChecked = function () {
        if (this.paginator && !this.dataSource.paginator) {
            this.dataSource.paginator = this.paginator;
        }
        if (this.sort && !this.dataSource.sort) {
            this.dataSource.sort = this.sort;
        }
    };
    MyOrdersComponent.prototype.ngOnDestroy = function () {
        if (this.authSubscription) {
            this.authSubscription.unsubscribe();
        }
        if (this.ordersSubscription) {
            this.ordersSubscription.unsubscribe();
        }
    };
    MyOrdersComponent.prototype.onOrderClicked = function (order) {
        if (order.shoppingCartItems.length > 1) {
            this.expandedOrder = this.expandedOrder === order ? null : order;
        }
    };
    MyOrdersComponent.prototype.countItems = function (order) {
        return order.shoppingCartItems.reduce(function (sum, item) { return (sum += item.quantity); }, 0);
    };
    MyOrdersComponent.prototype.getTotalPrice = function (order) {
        return order.shoppingCartItems.reduce(function (sum, item) { return (sum += item.quantity * item.product.price); }, 0);
    };
    MyOrdersComponent.ctorParameters = function () { return [
        { type: _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], MyOrdersComponent.prototype, "paginator", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], MyOrdersComponent.prototype, "sort", void 0);
    MyOrdersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-orders',
            template: __importDefault(__webpack_require__(/*! raw-loader!./my-orders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-orders/my-orders.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./my-orders.component.scss */ "./src/app/components/my-orders/my-orders.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]])
    ], MyOrdersComponent);
    return MyOrdersComponent;
}());



/***/ }),

/***/ "./src/app/components/order-review/order-review.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/order-review/order-review.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXItcmV2aWV3L29yZGVyLXJldmlldy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/order-review/order-review.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/order-review/order-review.component.ts ***!
  \*******************************************************************/
/*! exports provided: OrderReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderReviewComponent", function() { return OrderReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_address__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/address */ "./src/app/models/address.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");






var OrderReviewComponent = /** @class */ (function () {
    function OrderReviewComponent(route, orderService) {
        var _this = this;
        this.orderId = route.snapshot.paramMap.get('id');
        this.itemsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.addressSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](new _models_address__WEBPACK_IMPORTED_MODULE_4__["Address"]());
        this.orderSubscription = orderService.get(this.orderId).subscribe(function (order) {
            _this.order = order;
            _this.itemsSubject.next(order.shoppingCartItems);
            _this.addressSubject.next(order.address);
        });
    }
    OrderReviewComponent.prototype.ngOnDestroy = function () {
        if (this.orderSubscription) {
            this.orderSubscription.unsubscribe();
        }
        this.itemsSubject.complete();
        this.addressSubject.complete();
    };
    OrderReviewComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"] }
    ]; };
    OrderReviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-review',
            template: __importDefault(__webpack_require__(/*! raw-loader!./order-review.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-review/order-review.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./order-review.component.scss */ "./src/app/components/order-review/order-review.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"]])
    ], OrderReviewComponent);
    return OrderReviewComponent;
}());



/***/ }),

/***/ "./src/app/components/order-success/order-success.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/order-success/order-success.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".margin {\n  margin-top: 100px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlci1zdWNjZXNzL0M6XFxVc2Vyc1xcZG9taW51c1xcYmxhY2tTdXNoaS9zcmNcXGFwcFxcY29tcG9uZW50c1xcb3JkZXItc3VjY2Vzc1xcb3JkZXItc3VjY2Vzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JkZXItc3VjY2Vzcy9vcmRlci1zdWNjZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/order-success/order-success.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/order-success/order-success.component.ts ***!
  \*********************************************************************/
/*! exports provided: OrderSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessComponent", function() { return OrderSuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



var OrderSuccessComponent = /** @class */ (function () {
    function OrderSuccessComponent(route, router) {
        var _this = this;
        this.queryParamsSubscription = route.queryParams.subscribe(function (params) {
            _this.orderId = params.orderId;
            if (!params.orderId) {
                console.error('Tried to access order-success without an orderId');
                router.navigate(['/']);
            }
        });
    }
    OrderSuccessComponent.prototype.ngOnDestroy = function () {
        if (this.queryParamsSubscription) {
            this.queryParamsSubscription.unsubscribe();
        }
    };
    OrderSuccessComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    OrderSuccessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-success',
            template: __importDefault(__webpack_require__(/*! raw-loader!./order-success.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-success/order-success.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./order-success.component.scss */ "./src/app/components/order-success/order-success.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OrderSuccessComponent);
    return OrderSuccessComponent;
}());



/***/ }),

/***/ "./src/app/components/order-summary/order-summary.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/order-summary/order-summary.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-column-price {\n  width: 100px;\n  text-align: right; }\n\ntr.mat-footer-row {\n  font-weight: bold; }\n\n.textCenter {\n  text-align: center; }\n\n.styleTable {\n  display: flex;\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcmRlci1zdW1tYXJ5L0M6XFxVc2Vyc1xcZG9taW51c1xcYmxhY2tTdXNoaS9zcmNcXGFwcFxcY29tcG9uZW50c1xcb3JkZXItc3VtbWFyeVxcb3JkZXItc3VtbWFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL29yZGVyLXN1bW1hcnkvb3JkZXItc3VtbWFyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY29sdW1uLXByaWNlIHtcbiAgd2lkdGg6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxudHIubWF0LWZvb3Rlci1yb3cge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50ZXh0Q2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnN0eWxlVGFibGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/order-summary/order-summary.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/order-summary/order-summary.component.ts ***!
  \*********************************************************************/
/*! exports provided: OrderSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSummaryComponent", function() { return OrderSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var OrderSummaryComponent = /** @class */ (function () {
    function OrderSummaryComponent() {
        this.columnsToDisplay = ['quantityAndName', 'price'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    OrderSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.items$) {
            this.itemsSubscription = this.items$.subscribe(function (items) {
                _this.dataSource.data = items;
                _this.updateTotals();
            });
        }
    };
    OrderSummaryComponent.prototype.ngOnDestroy = function () {
        if (this.itemsSubscription) {
            this.itemsSubscription.unsubscribe();
        }
    };
    // TODO: use observables to update automatically?
    OrderSummaryComponent.prototype.updateTotals = function () {
        this.totalQuantity = this.dataSource.data.reduce(function (total, item) { return (total += item.quantity); }, 0);
        this.totalPrice = this.dataSource.data.reduce(function (total, item) { return (total += item.quantity * item.product.price); }, 0);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
    ], OrderSummaryComponent.prototype, "items$", void 0);
    OrderSummaryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-summary',
            template: __importDefault(__webpack_require__(/*! raw-loader!./order-summary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/order-summary/order-summary.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./order-summary.component.scss */ "./src/app/components/order-summary/order-summary.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], OrderSummaryComponent);
    return OrderSummaryComponent;
}());



/***/ }),

/***/ "./src/app/components/product-card/product-card.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/product-card/product-card.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\n  margin-bottom: 10px; }\n  mat-card img {\n    width: 275px;\n    height: 200px;\n    -o-object-fit: contain;\n       object-fit: contain; }\n  .styleCard {\n  min-width: 319px;\n  max-width: 320px;\n  margin: 20px;\n  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.3), 0px 1px 1px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 0px rgba(0, 0, 0, 0.3); }\n  .styleContainer {\n  font-size: 18px;\n  display: flex;\n  justify-content: space-between; }\n  .styleDescription {\n  margin-bottom: 1rem;\n  text-align: center;\n  min-height: 84px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical; }\n  .styleFontSize {\n  font-size: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0LWNhcmQvQzpcXFVzZXJzXFxkb21pbnVzXFxibGFja1N1c2hpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9kdWN0LWNhcmRcXHByb2R1Y3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQixFQUFBO0VBRHJCO0lBSUksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBbUI7T0FBbkIsbUJBQW1CLEVBQUE7RUFHdkI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFFWixzSEFBc0gsRUFBQTtFQUV4SDtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsOEJBQThCLEVBQUE7RUFFaEM7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUVoQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsNEJBQTRCLEVBQUE7RUFFOUI7RUFDRSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2R1Y3QtY2FyZC9wcm9kdWN0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMjc1cHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICB9XG59XG4uc3R5bGVDYXJkIHtcbiAgbWluLXdpZHRoOiAzMTlweDtcbiAgbWF4LXdpZHRoOiAzMjBweDtcbiAgbWFyZ2luOiAyMHB4O1xuXG4gIGJveC1zaGFkb3c6IDBweCAycHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyksIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyksIDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG4uc3R5bGVDb250YWluZXIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5zdHlsZURlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA4NHB4O1xuXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuLnN0eWxlRm9udFNpemUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/product-card/product-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/product-card/product-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_firebase_objects_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/firebase-objects/product */ "./src/app/models/firebase-objects/product.ts");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");




var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent(cartService) {
        this.cartService = cartService;
        this.item = {
            product: {
                categoryId: null,
                title: null,
                price: null,
                imageUrl: null,
                weight: null,
                description: null
            },
            quantity: 0,
        };
    }
    Object.defineProperty(ProductCardComponent.prototype, "title", {
        get: function () {
            return this.product ? this.product.title || 'Title' : 'Title';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductCardComponent.prototype, "category", {
        get: function () {
            return this.item.product
                ? this.item.product.category
                    ? this.item.product.category.name
                    : 'Category'
                : 'Category';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductCardComponent.prototype, "imageUrl", {
        get: function () {
            return this.item.product
                ? this.item.product.imageUrl
                    ? this.item.product.imageUrl
                    : ''
                : '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductCardComponent.prototype, "price", {
        get: function () {
            return this.item.product ? this.item.product.price || '0' : '0';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductCardComponent.prototype, "weight", {
        get: function () {
            return this.item.product ? this.item.product.weight || '0' : '0';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductCardComponent.prototype, "description", {
        get: function () {
            return this.item.product ? this.item.product.description || '' : '';
        },
        enumerable: false,
        configurable: true
    });
    ProductCardComponent.prototype.ngOnChanges = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var cartItem$;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cartService.initialize()];
                    case 1:
                        _a.sent();
                        this.item.product = this.product;
                        if (this.item.product) {
                            cartItem$ = this.cartService.getItem(this.item.product.id);
                            this.cartItemSubscription = cartItem$.subscribe(function (cartItem) { return (_this.item.quantity = cartItem.quantity || 0); });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductCardComponent.prototype.clickOnDescription = function () {
        var el = document.getElementById("description");
        console.log(el.style);
        el.style.display = 'block';
    };
    ProductCardComponent.prototype.ngOnDestroy = function () {
        if (this.cartItemSubscription) {
            this.cartItemSubscription.unsubscribe();
        }
    };
    ProductCardComponent.prototype.addToCart = function () {
        // change the quantity manually first to make the UI react fast in case Firebase is slow
        this.item.quantity += 1;
        this.cartService.addToCart(this.item.product);
    };
    ProductCardComponent.prototype.removeFromCart = function () {
        this.item.quantity -= 1;
        this.cartService.removeFromCart(this.item.product.id);
    };
    ProductCardComponent.ctorParameters = function () { return [
        { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _models_firebase_objects_product__WEBPACK_IMPORTED_MODULE_2__["Product"])
    ], ProductCardComponent.prototype, "product", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], ProductCardComponent.prototype, "isAdminPreview", void 0);
    ProductCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-card',
            template: __importDefault(__webpack_require__(/*! raw-loader!./product-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product-card/product-card.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./product-card.component.scss */ "./src/app/components/product-card/product-card.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"]])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __importDefault(__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/products.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./products.component.scss */ "./src/app/components/products/products.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/quantity-selector/quantity-selector.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/quantity-selector/quantity-selector.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media only screen and (min-width: 200px) and (max-width: 350px) {\n  .quantity {\n    padding-left: 30px;\n    font-weight: bold; } }\n\n@media (min-width: 800px) {\n  .quantity {\n    margin: 20px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9xdWFudGl0eS1zZWxlY3Rvci9DOlxcVXNlcnNcXGRvbWludXNcXGJsYWNrU3VzaGkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHF1YW50aXR5LXNlbGVjdG9yXFxxdWFudGl0eS1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQURGO0lBRUksa0JBQWtCO0lBQ2xCLGlCQUFpQixFQUFBLEVBRXBCOztBQUdDO0VBREY7SUFFSSxZQUFZLEVBQUEsRUFFZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVhbnRpdHktc2VsZWN0b3IvcXVhbnRpdHktc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVhbnRpdHkge1xuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDIwMHB4KSBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbn1cblxuLnF1YW50aXR5IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/quantity-selector/quantity-selector.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/quantity-selector/quantity-selector.component.ts ***!
  \*****************************************************************************/
/*! exports provided: QuantitySelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuantitySelectorComponent", function() { return QuantitySelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var QuantitySelectorComponent = /** @class */ (function () {
    function QuantitySelectorComponent() {
        this.quantityPlusOne = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.quantityMinusOne = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    QuantitySelectorComponent.prototype.ngOnInit = function () {
    };
    QuantitySelectorComponent.prototype.plusOne = function () {
        this.quantityPlusOne.emit();
    };
    QuantitySelectorComponent.prototype.minusOne = function () {
        this.quantityMinusOne.emit();
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], QuantitySelectorComponent.prototype, "item", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], QuantitySelectorComponent.prototype, "suffixText", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], QuantitySelectorComponent.prototype, "quantityPlusOne", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], QuantitySelectorComponent.prototype, "quantityMinusOne", void 0);
    QuantitySelectorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quantity-selector',
            template: __importDefault(__webpack_require__(/*! raw-loader!./quantity-selector.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/quantity-selector/quantity-selector.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./quantity-selector.component.scss */ "./src/app/components/quantity-selector/quantity-selector.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], QuantitySelectorComponent);
    return QuantitySelectorComponent;
}());



/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  margin-top: 0px; }\n\ntr.mat-footer-row {\n  font-weight: bold; }\n\ntd img {\n  width: 75px;\n  height: 75px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.mat-column-productImage {\n  width: 150px; }\n\n.mat-column-price {\n  width: 100px;\n  text-align: center; }\n\n.mat-header-cell {\n  padding-right: 10px; }\n\n.textCenter {\n  font-size: x-large;\n  text-align: center;\n  margin-bottom: 20px; }\n\n.fontSize {\n  font-size: 3em; }\n\n.margin {\n  text-align: center;\n  margin-top: 50px; }\n\n.margin20px {\n  margin: 20px; }\n\n.padingMobile {\n  display: flex;\n  justify-content: center; }\n\n@media only screen and (min-width: 1023px) and (max-width: 2000px) {\n  .padingTable {\n    padding-left: 16em; } }\n\n@media only screen and (min-width: 768px) and (max-width: 1024px) {\n  .padingTable {\n    padding-left: 9em; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG9wcGluZy1jYXJ0L0M6XFxVc2Vyc1xcZG9taW51c1xcYmxhY2tTdXNoaS9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2hvcHBpbmctY2FydFxcc2hvcHBpbmctY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFFckI7RUFDRSxjQUFjLEVBQUE7O0FBRWhCO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLGFBQWE7RUFDYix1QkFBdUIsRUFBQTs7QUFJdkI7RUFERjtJQUVJLGtCQUFrQixFQUFBLEVBS3JCOztBQUhDO0VBSkY7SUFLSSxpQkFBaUIsRUFBQSxFQUVwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hvcHBpbmctY2FydC9zaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbnRyLm1hdC1mb290ZXItcm93IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnRkIGltZyB7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDc1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ubWF0LWNvbHVtbi1wcm9kdWN0SW1hZ2Uge1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5tYXQtY29sdW1uLXByaWNlIHtcbiAgd2lkdGg6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtaGVhZGVyLWNlbGwge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4udGV4dENlbnRlciB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmZvbnRTaXplIHtcbiAgZm9udC1zaXplOiAzZW07XG59XG4ubWFyZ2luIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ubWFyZ2luMjBweCB7XG4gIG1hcmdpbjogMjBweDtcbn1cbi5wYWRpbmdNb2JpbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnBhZGluZ1RhYmxlIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDIzcHgpIGFuZCAobWF4LXdpZHRoOiAyMDAwcHgpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2ZW07XG4gIH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIHBhZGRpbmctbGVmdDogOWVtO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/shopping-cart/shopping-cart.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.ts ***!
  \*********************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");







var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(cartService, router, spinner, metaService) {
        var _this = this;
        this.cartService = cartService;
        this.router = router;
        this.spinner = spinner;
        this.metaService = metaService;
        this.columnsToDisplay = ['productImage', 'categoryName', 'productName', 'quantity', 'price'];
        this.addTag();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.cartService.initialize().then(function () {
            _this.itemsSubscription = _this.cartService
                .getAllItems()
                .subscribe(function (items) {
                _this.dataSource.data = items;
                _this.updateTotals();
            });
        });
    }
    ShoppingCartComponent.prototype.addTag = function () {
        this.metaService.addTag({ name: 'title', content: 'BlackSushi - найбільші і найкращі суші та піца у Львові! ' });
        this.metaService.addTag({ name: 'description', content: 'Швидка і безкоштовна доставка ☎0630494941 ☎0930494941' });
        this.metaService.addTag({ property: 'og:title', content: 'Content Title for social media' });
        //  Open Graph / Facebook 
        this.metaService.addTag({ property: "og:type", content: 'website ' });
        this.metaService.addTag({ property: "og:url", content: 'http://blacksushi.com.ua/' });
        this.metaService.addTag({ property: "og:title", content: "BlackSushi - найбільші і найкращі суші у Львові! " });
        this.metaService.addTag({
            property: "og:description", content: "Замовляй найкращі суші у нас✅ Безкоштовна доставка суші✅ Замовити найсмачніші суші ☎0630494941 ☎0930494941"
        });
        this.metaService.addTag({ property: "og:image", content: "" });
    };
    ShoppingCartComponent.prototype.ngOnInit = function () {
    };
    ShoppingCartComponent.prototype.ngOnDestroy = function () {
        if (this.itemsSubscription) {
            this.itemsSubscription.unsubscribe();
        }
    };
    ShoppingCartComponent.prototype.updateTotals = function () {
        this.totalQuantity = this.dataSource.data.reduce(function (total, item) { return (total += item.quantity); }, 0);
        this.totalPrice = this.dataSource.data.reduce(function (total, item) { return (total += item.quantity * item.product.price); }, 0);
    };
    ShoppingCartComponent.prototype.onQuantityPlusOne = function (item) {
        this.cartService.addToCart(item.product);
    };
    ShoppingCartComponent.prototype.onQuantityMinusOne = function (item) {
        this.cartService.removeFromCart(item.product.id);
    };
    ShoppingCartComponent.prototype.onCheckOut = function () {
        // create an order
        // add it to the order collection
    };
    ShoppingCartComponent.prototype.backToMain = function () {
        var _this = this;
        this.spinner.show();
        setTimeout(function () {
            /** spinner ends after 1 seconds */
            _this.spinner.hide();
        }, 1000);
        this.router.navigate(['/']);
    };
    ShoppingCartComponent.ctorParameters = function () { return [
        { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Meta"] }
    ]; };
    ShoppingCartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-cart',
            template: __importDefault(__webpack_require__(/*! raw-loader!./shopping-cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/shopping-cart.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./shopping-cart.component.scss */ "./src/app/components/shopping-cart/shopping-cart.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCartService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Meta"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");


















var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__["MatBadgeModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"]
            ],
            exports: [
                _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_17__["MatBadgeModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/models/address.ts":
/*!***********************************!*\
  !*** ./src/app/models/address.ts ***!
  \***********************************/
/*! exports provided: Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());



/***/ }),

/***/ "./src/app/models/firebase-objects/order.ts":
/*!**************************************************!*\
  !*** ./src/app/models/firebase-objects/order.ts ***!
  \**************************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Order = /** @class */ (function () {
    function Order() {
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/models/firebase-objects/product.ts":
/*!****************************************************!*\
  !*** ./src/app/models/firebase-objects/product.ts ***!
  \****************************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/services/category.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/category.service.ts ***!
  \**********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");
/* harmony import */ var _firebase_collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase-collection */ "./src/app/services/firebase-collection.ts");




var CategoryService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CategoryService, _super);
    function CategoryService(db) {
        return _super.call(this, db, '/categories') || this;
    }
    CategoryService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    CategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], CategoryService);
    return CategoryService;
}(_firebase_collection__WEBPACK_IMPORTED_MODULE_3__["FirebaseCollection"]));



/***/ }),

/***/ "./src/app/services/firebase-collection.ts":
/*!*************************************************!*\
  !*** ./src/app/services/firebase-collection.ts ***!
  \*************************************************/
/*! exports provided: FirebaseCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseCollection", function() { return FirebaseCollection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


var FirebaseCollection = /** @class */ (function () {
    function FirebaseCollection(db, initialPath) {
        this.db = db;
        this.path = initialPath;
    }
    Object.defineProperty(FirebaseCollection.prototype, "path", {
        get: function () {
            return this._path;
        },
        set: function (path) {
            this._path = path;
            this.collection = this.db.collection(path);
        },
        enumerable: false,
        configurable: true
    });
    FirebaseCollection.prototype.get = function (requestedId) {
        return this.collection
            .doc(requestedId)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (action) {
            var data = action.payload.data();
            var id = action.payload.id;
            return Object.assign({ id: id }, data);
        }));
    };
    FirebaseCollection.prototype.getAll = function () {
        return this.collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (action) {
                var data = action.payload.doc.data();
                var id = action.payload.doc.id;
                return Object.assign({ id: id }, data);
            });
        }));
    };
    // TODO: should I convert all promises to observables?
    FirebaseCollection.prototype.create = function (object) {
        // Firebase is not able to handle class instances, only objects
        var newObject = JSON.parse(JSON.stringify(object));
        return this.collection.add(newObject);
    };
    FirebaseCollection.prototype.createWithId = function (object, id) {
        // Firebase is not able to handle class instances, only objects
        var newObject = JSON.parse(JSON.stringify(object));
        return this.collection.doc(id).set(newObject);
    };
    FirebaseCollection.prototype.update = function (id, object) {
        return this.collection.doc(id).update(object);
    };
    FirebaseCollection.prototype.delete = function (id) {
        return this.collection.doc(id).delete();
    };
    FirebaseCollection.prototype.deleteCollection = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var snapshot, deletionPromises, error_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.collection.get().toPromise()];
                    case 1:
                        snapshot = _a.sent();
                        deletionPromises = snapshot.docs.map(function (doc) { return doc.ref.delete(); });
                        return [4 /*yield*/, Promise.all(deletionPromises)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log("Couldn't delete collection " + this.path + " because " + error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // TODO: refactor this to be chainable multiple times
    FirebaseCollection.prototype.sortBy = function (orderBy) {
        return this.collection.ref.orderBy(orderBy);
        // this.collection = this.db.collection<T>(this.path, ref =>
        //   ref.orderBy(orderBy)
        // );
        // return this;
    };
    return FirebaseCollection;
}());



/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _firebase_collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firebase-collection */ "./src/app/services/firebase-collection.ts");





var OrderService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OrderService, _super);
    function OrderService(db) {
        return _super.call(this, db, '/orders') || this;
    }
    OrderService.prototype.getAllForUser = function () {
        return _super.prototype.getAll.call(this)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (orders) { return orders.filter(function (orders) { return console.log(orders); }); }));
    };
    OrderService.prototype.getOrders = function () {
        return this.db.collection('orders').valueChanges();
    };
    OrderService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    OrderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], OrderService);
    return OrderService;
}(_firebase_collection__WEBPACK_IMPORTED_MODULE_4__["FirebaseCollection"]));



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");
/* harmony import */ var _firebase_collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase-collection */ "./src/app/services/firebase-collection.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category.service */ "./src/app/services/category.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var ProductService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ProductService, _super);
    function ProductService(db, categoryService) {
        var _this = _super.call(this, db, '/products') || this;
        _this.categoryService = categoryService;
        return _this;
    }
    ProductService.prototype.getAllPopulatedProducts = function () {
        // products will depend on categories, so get them together
        var categoriesAndProducts$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.categoryService.getAll(), _super.prototype.getAll.call(this));
        // populate each product with a category object, using its categoryId
        var productsWithCategory = categoriesAndProducts$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_a) {
            var categories = _a[0], products = _a[1];
            return products.map(function (product) {
                product.category = categories.find(function (category) { return category.id === product.categoryId; });
                return product;
            });
        }));
        return productsWithCategory;
    };
    ProductService.prototype.getPopulatedProductsByCategory = function (categoryId) {
        if (!categoryId) {
            return this.getAllPopulatedProducts();
        }
        return this.getAllPopulatedProducts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (products) {
            return products.filter(function (product) { return product.categoryId === categoryId; });
        }));
    };
    ProductService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: _category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"] }
    ]; };
    ProductService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"]])
    ], ProductService);
    return ProductService;
}(_firebase_collection__WEBPACK_IMPORTED_MODULE_3__["FirebaseCollection"]));



/***/ }),

/***/ "./src/app/services/shopping-cart-item.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/shopping-cart-item.service.ts ***!
  \********************************************************/
/*! exports provided: ShoppingCartItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartItemService", function() { return ShoppingCartItemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _firebase_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebase-collection */ "./src/app/services/firebase-collection.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ShoppingCartItemService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ShoppingCartItemService, _super);
    function ShoppingCartItemService(db) {
        var _this = _super.call(this, db, null) || this;
        _this.isInitialized = false;
        return _this;
    }
    ShoppingCartItemService.prototype.initialize = function (shoppingCartId) {
        // TODO: store paths in a constants class
        this.path = "/shopping-carts/" + shoppingCartId + "/items";
        this.isInitialized = true;
    };
    ShoppingCartItemService.prototype.throwIfNotInitialized = function () {
        if (!this.isInitialized) {
            throw new Error('ShoppingCartItemService: you must call initialize(shoppingCartId) before calling other methods of this class.');
        }
    };
    ShoppingCartItemService.prototype.get = function (requestedId) {
        this.throwIfNotInitialized();
        return _super.prototype.get.call(this, requestedId);
    };
    ShoppingCartItemService.prototype.getAll = function () {
        this.throwIfNotInitialized();
        return _super.prototype.getAll.call(this);
    };
    ShoppingCartItemService.prototype.createItemFromProduct = function (product, id) {
        this.throwIfNotInitialized();
        var newItem = {
            product: product,
            quantity: 1,
            id: product.id,
        };
        return _super.prototype.createWithId.call(this, newItem, id);
    };
    ShoppingCartItemService.prototype.update = function (id, item) {
        this.throwIfNotInitialized();
        return _super.prototype.update.call(this, id, item);
    };
    ShoppingCartItemService.prototype.delete = function (id) {
        this.throwIfNotInitialized();
        return _super.prototype.delete.call(this, id);
    };
    ShoppingCartItemService.prototype.deleteCollection = function () {
        this.throwIfNotInitialized();
        return _super.prototype.deleteCollection.call(this);
    };
    ShoppingCartItemService.prototype.increaseQuantity = function (id, item) {
        this.throwIfNotInitialized();
        item.quantity += 1;
        return _super.prototype.update.call(this, id, item);
    };
    ShoppingCartItemService.prototype.decreaseQuantity = function (id) {
        var _this = this;
        this.throwIfNotInitialized();
        this.get(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (item) {
            if (item.quantity < 2) {
                _this.delete(id);
            }
            else {
                item.quantity -= 1;
                return _super.prototype.update.call(_this, id, item);
            }
        });
    };
    ShoppingCartItemService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
    ]; };
    ShoppingCartItemService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], ShoppingCartItemService);
    return ShoppingCartItemService;
}(_firebase_collection__WEBPACK_IMPORTED_MODULE_2__["FirebaseCollection"]));



/***/ }),

/***/ "./src/app/services/shopping-cart.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/shopping-cart.service.ts ***!
  \***************************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");
/* harmony import */ var _firebase_collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase-collection */ "./src/app/services/firebase-collection.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shopping_cart_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-cart-item.service */ "./src/app/services/shopping-cart-item.service.ts");






var ShoppingCartService = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ShoppingCartService, _super);
    function ShoppingCartService(db, itemService) {
        var _this = _super.call(this, db, '/shopping-carts') || this;
        _this.itemService = itemService;
        return _this;
    }
    ShoppingCartService.prototype.initialize = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var cartId;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        this.initializeItemService(cartId);
                        return [2 /*return*/];
                }
            });
        });
    };
    // TODO: make the create method of the super class private, so this can also be private
    ShoppingCartService.prototype.create = function () {
        var cart = {
            dateCreated: new Date(),
        };
        return _super.prototype.create.call(this, cart);
    };
    ShoppingCartService.prototype.getOrCreateCartId = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var storedId, result;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        storedId = localStorage.getItem('cartId');
                        if (storedId) {
                            return [2 /*return*/, storedId];
                        }
                        return [4 /*yield*/, this.create()];
                    case 1:
                        result = (_a.sent());
                        localStorage.setItem('cartId', result.id);
                        return [2 /*return*/, result.id];
                }
            });
        });
    };
    ShoppingCartService.prototype.initializeItemService = function (cartId) {
        this.itemService.initialize(cartId);
    };
    ShoppingCartService.prototype.addToCart = function (product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var cartId, item$;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        this.initializeItemService(cartId);
                        item$ = this.itemService.get(product.id);
                        item$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (item) {
                            if (item.product) {
                                _this.itemService.increaseQuantity(item.id, item);
                            }
                            else {
                                _this.itemService.createItemFromProduct(product, product.id);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartService.prototype.removeFromCart = function (id) {
        return this.itemService.decreaseQuantity(id);
    };
    ShoppingCartService.prototype.getNumberOfItemsInCart = function () {
        return this.itemService
            .getAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (items) {
            return items.reduce(function (sum, item) { return (sum += item.quantity || 0); }, 0);
        }));
    };
    ShoppingCartService.prototype.getItem = function (itemId) {
        return this.itemService.get(itemId);
    };
    ShoppingCartService.prototype.getAllItems = function () {
        return this.itemService.getAll();
    };
    ShoppingCartService.prototype.deleteCart = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var cartId;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        return [4 /*yield*/, this.itemService.deleteCollection()];
                    case 2:
                        _a.sent();
                        this.delete(cartId);
                        localStorage.removeItem('cartId');
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: _shopping_cart_item_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartItemService"] }
    ]; };
    ShoppingCartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _shopping_cart_item_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartItemService"]])
    ], ShoppingCartService);
    return ShoppingCartService;
}(_firebase_collection__WEBPACK_IMPORTED_MODULE_3__["FirebaseCollection"]));



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tel {\n  font-size: 1.2em;\n  font-weight: 600; }\n\n.logoP {\n  font-size: 1.8em;\n  font-weight: 600; }\n\n@media (min-width: 1200px) {\n  .container,\n  .container-sm,\n  .container-md,\n  .container-lg,\n  .container-xl {\n    max-width: 1158px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdmJhci9DOlxcVXNlcnNcXGRvbWludXNcXGJsYWNrU3VzaGkvc3JjXFxhcHBcXHNoYXJlZFxcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFOzs7OztJQUtFLDRCQUE0QixFQUFBLEVBQzdCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVsIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5sb2dvUCB7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5jb250YWluZXIsXG4gIC5jb250YWluZXItc20sXG4gIC5jb250YWluZXItbWQsXG4gIC5jb250YWluZXItbGcsXG4gIC5jb250YWluZXIteGwge1xuICAgIG1heC13aWR0aDogMTE1OHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shopping-cart.service */ "./src/app/services/shopping-cart.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router, cartService, modalService) {
        var _this = this;
        this.location = location;
        this.element = element;
        this.router = router;
        this.modalService = modalService;
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sidebarVisible = false;
        cartService.initialize().then(function () {
            return cartService.getNumberOfItemsInCart().subscribe(function (count) {
                _this.numberInCart = count;
            });
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.open = function (content, type, modalDimension) {
        var _this = this;
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini modal-primary', size: 'sm' }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else if (modalDimension === undefined && type === 'Login') {
            this.modalService.open(content, { windowClass: 'modal-login modal-primary' }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else {
            this.modalService.open(content).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
    };
    NavbarComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.onActivate = function () {
        window.scroll(0, 0);
        //or document.body.scrollTop = 0;
        //or document.querySelector('body').scrollTo(0,0)
    };
    NavbarComponent.prototype.onActivateBlack = function () {
        this.router.navigate(['home']);
        window.scroll(0, 0);
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], NavbarComponent.prototype, "sidenavToggle", void 0);
    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: true,
    firebase: {
        apiKey: 'AIzaSyCuhwJ--d2qlUW_PALGD1yPVhpbTB2kYc4',
        authDomain: 'angularfirebaseauth-bcd16.firebaseapp.com',
        databaseURL: 'https://angularfirebaseauth-bcd16.firebaseio.com',
        projectId: 'angularfirebaseauth-bcd16',
        storageBucket: 'angularfirebaseauth-bcd16.appspot.com',
        messagingSenderId: '35402002221',
        appId: '1:35402002221:web:f80451430359e6d3'
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dominus\blackSushi\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map