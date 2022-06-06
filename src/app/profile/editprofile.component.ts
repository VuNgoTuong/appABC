import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
    selector: 'change-pass',
    template: `
    <div>
        <div class="header-add">
            <div class="img-vector">
            <a routerLink="/profile">
                <img src="assets/logo/Vector.png" style="width: 14.1px;height: 24px;">
            </a>
        </div>
            <div class="title-add" >
                <div class="editprofile font-16px">Edit profile</div>
            </div>
        </div>

        <div class="img-profile">
            <img class="avadefault" src="assets/logo/DefaultAvatar.png">
            <div class="camera">
                <img src="assets/logo/Camera.png">
            </div>
        </div>
        <form>
            <div class="form-auth">
                <fieldset class="form-group">
                    <label>Name</label>
                    <input value="Vu" class="form-control form-control-lg"
                        type="text" />
                </fieldset>
                <fieldset class="form-group">
                    <label>Phone number</label>
                    <input value="0354161612" class="form-control form-control-lg"
                        type="text" />
                </fieldset>
                <fieldset class="form-group">
                    <button class="btn btn-primary" type="submit" routerLink="/profile" >Save</button>
                </fieldset>
            </div>
        </form>
    </div>

  `,
    styles: [`
    .header-add{
        background-color: #F46F22;
        display: flex;
        padding: 10px;
        align-items:center;
        height:70px;
    }
    .img-profile{
        display:flex;
        justify-content:center;
    }
    .img-vector{
        margin: 20px 10px;
        width: 14.1px;
        height: 24px;
        align-items:center;
    }
    .title-add{
        width: 90%;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        color: white;
        margin-right: 25px;
    }
    .editprofile{
        width: 134px;
        height: 22px;
        font-weight: bold;
    }
    .avadefault{
        width: 80px;
        height: 80px;
    }
    .camera{
        position:absolute;
        right: 40%;
        top: 140px;
    }
    .form-auth{
        margin: 10px;
    }
    .form-group{
        display:block;
        border:0px;
        margin: 5px auto;
    }
    .form-control{
        display: block;
        width: 90%;
        padding: .5rem .75rem;
        font-size: 16px;
        line-height: 1.25;
        color: #55595c;
        border: 1px solid rgba(0,0,0,.15);
        border-radius: .25rem;
    }
    .btn{
        font-weight:400;
        line-height:1.25;
        text-align:center;
        border:1px solid transparent;
        padding:.5rem 1rem;
        border-radius:.25rem;
        width: 100%;
        height: 52px;
        margin-top:30px;
    }
    .btn-primary{
        color:#fff;
        background-color:#F46F22;
        border-color:#F46F22
    }

    .far{
        position: absolute;
        padding: 10px 5%;
        cursor: pointer;
      }
    .far{ right: 0px;}
    `]
})
export class EditProfileComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    // ngAfterViewInit() {
    //   this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#DDDDDD';
    //   this.elementRef.nativeElement.ownerDocument.body.style.width = '100%';
    // }
}
