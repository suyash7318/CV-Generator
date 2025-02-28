body {
   margin: 0;
   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
   font-size: 1rem;
   font-weight: 400;
   line-height: 1.5;
   color: #212529;
   text-align: left;
   background-color: #fff;
}
 
#cv-form {
   /* display: none; */
}

@media (min-width: 576px) {
   .container, .container-sm {
       max-width: 80%;
   }
}
.container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl {
   width: 200%;
   padding-right: 10px;
   padding-left: 10px;
   margin-right: auto;
   margin-left: auto;
}

.container{
background-color: lightcyan;
overflow-y: auto; /* Add scroll if needed */
}



*, ::after, ::before {
   box-sizing: border-box;
}


.row {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(250px, 2fr)); /* Auto adjusts columns */
   gap: 15px; /* Space between columns */
   margin-right: 0;
   margin-left: 0;
   min-height: 100%;
}

.col-md-6 {
   grid-column: span 2; /* Spans 6 columns in a 12-column grid */

}

.col-md-4 {
   grid-column: span 4;
}

#hr{
   border: 3px solid white; /* Makes the line broader and white */
}


.col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {
   position: relative;
   width: 100%;
   padding-right: 15px;
   padding-left: 15px;
}

.form-group {
   margin-bottom: 1rem;
}

label {
   display: inline-block;
   margin-bottom: .5rem;
}

.form-control {
   display: block;
   width: 100%;
   height: calc(1.5em + .75rem + 2px);
   padding: .375rem .75rem;
   font-size: 1rem;
   font-weight: 400;
   line-height: 1.5;
   color: #495057;
   background-color: #fff;
   background-clip: padding-box;
   border: 1px solid #ced4da;
   border-radius: .25rem;
   transition: border-color .15sease-in-out, box-shadow .15sease-in-out;
}

button, input, optgroup, select, textarea {
   margin: 0;
   font-family: inherit;
   font-size: inherit;
   line-height: inherit;
}
button, input {
   overflow: visible;
}
button, input {
   overflow: visible;
}
button, input, optgroup, select, textarea {
   margin: 0;
   font-family: inherit;
   font-size: inherit;
   line-height: inherit;
}

textarea.form-control {
   height: auto;
}


.text-center {
   text-align: center !important;
}
.pb-5, .py-5 {
   padding-bottom: 3rem !important;
}
.pt-5, .py-5 {
   padding-top: 3rem !important;
   height: 60rem;
}

.py-5{
   overflow-y: auto;
}

@media (min-width: 768px) {
   .col-md-4 {
       -ms-flex: 0 0 33.333333%;
       flex: 0 0 33.333333%;
       max-width: 33.333333%;
   }
}

.myimg {
   /* border: 1px solid red; */
   border-radius: 50%;
   width: 250px;
   height: 250px;
}

.img-fluid {
   width: 40%;
   height: 45%;
}
img {
   vertical-align: middle;
   border-style: none;
}

p {
   display: block;
   margin-block-start: 1em;
   margin-block-end: 1em;
   margin-inline-start: 0px;
   margin-inline-end: 0px;
   unicode-bidi: isolate;
}

.pt-5, .py-5 {
   padding-top: 3rem !important;
}
.pb-5, .py-5 {
   padding-bottom: 3rem !important;
}


.h1, h1 {
   font-size: 2.5rem;
}
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
   margin-bottom: .5rem;
   font-weight: 500;
   line-height: 1.2;
}
h1, h2, h3, h4, h5, h6 {
   margin-top: 0;
   margin-bottom: .5rem;
}

.mt-2, .my-2 {
   margin-top: .5rem !important;
}

.my-2{
   font-size: 3rem;
   font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.mt-3, .my-3 {
   margin-top: 1rem !important;
}

.mt-4, .my-4 {
   margin-top: 1.5rem !important;
}
.card {
   position: relative;
   display: -ms-flexbox;
   display: flex
;
   -ms-flex-direction: column;
   flex-direction: column;
   min-width: 0;
   word-wrap: break-word;
   background-color: #fff;
   background-clip: border-box;
   border: 1px solid rgba(0, 0, 0, .125);
   border-radius: .25rem;
}

.card-header:first-child {
   border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
}


.card-header {
   padding: .75rem 1.25rem;
   margin-bottom: 0;
   background-color: rgba(0, 0, 0, .03);
   border-bottom: 1px solid rgba(0, 0, 0, .125);
}

.card-body {
   -ms-flex: 1 1 auto;
   flex: 1 1 auto;
   min-height: 1px;
   padding: 1.25rem;
}

ul {
   display: block;
   list-style-type: disc;
   margin-block-start: 1em;
   margin-block-end: 1em;
   margin-inline-start: 0px;
   margin-inline-end: 0px;
   padding-inline-start: 40px;
   unicode-bidi: isolate;
}

li {
   display: list-item;
   text-align: -webkit-match-parent;
   unicode-bidi: isolate;
}

.btn:not(:disabled):not(.disabled) {
   cursor: pointer;
}
[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
   cursor: pointer;
}

.btn {
   display: inline-block;
   font-weight: 400;
   color: #f0f2f4;
   text-align: center;
   vertical-align: middle;
   -webkit-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;
   background-color: transparent;
   border: 1px solid transparent;
   padding: .375rem .75rem;
   font-size: 1rem;
   line-height: 1.5;
   border-radius: .25rem;
   background-color: rgb(0, 24, 241);
   }
button, select {
   text-transform: none;
}
button, input {
   overflow: visible;
}
button, input, optgroup, select, textarea {
   margin: 0;
   font-family: inherit;
   font-size: inherit;
   line-height: inherit;
}
button {
   border-radius: 0;
}

.cv-template-1 .background {
   background-color: rgb(17, 143, 143) !important;
}

.cv-template-2 .background {
   background-color: rgb(168, 122, 122) !important;
}

.cv-template-3 .background {
   background-color: rgb(128, 128, 128) !important;
}

#cv-template {
   display: none;
}
