import {useContext} from "react";
import context from "../context/context";

export function Getstrings(){
    const contexts = useContext(context);

    const isFarsi = (contexts.language === 'fa');
    const Strings = {
        navBarTitles : {
            home : (isFarsi) ? 'خانه' : 'Home',
            about : (isFarsi) ? 'درباره ما' : 'About US',
            contact : (isFarsi) ? 'ارتباط با ما' : 'Contact',
            portfolio : (isFarsi) ? 'نمونه کارها' : 'Portfolio',
            brand : (isFarsi) ? 'مانک' : 'Monck'
        },

        slidesInfo : [
            {
                title : (isFarsi) ? 'طراحی ساده' : 'Minimal Design',
                subTitle : (isFarsi) ? 'خلاقیت و فرهنک' : 'Culture and Creativity',
                img : 'img/i1.jpeg'
            },
            {
                title : (isFarsi) ? 'طراحی ایده آل' : 'Popular Design',
                subTitle : (isFarsi) ? 'خلاقیت و فرهنک' : 'Culture and Creativity',
                img : 'img/i2.jpeg'
            },
            {
                title : (isFarsi) ? 'بهترین مدل ها و طرح ها' : 'The Best Design',
                subTitle : (isFarsi) ? 'خلاقیت و فرهنک' : 'Culture and Creativity',
                img : 'img/i3.jpeg'
            },
            {
                title : (isFarsi) ? 'بهترین ها را اینجا بیابید' : 'Here are Designs',
                subTitle : (isFarsi) ? 'خلاقیت و فرهنک' : 'Culture and Creativity',
                img : 'img/i4.jpeg'
            },
        ],

        cards : [
            {
                h1 : (isFarsi) ? '۱۰' : '10',
                h5 : (isFarsi) ? 'تیتر' : 'Title',
                paragraph : (isFarsi) ? 
                  'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله ' 
                  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lah1ore et dolore magna aliqua.'
            },
            {
                h1 : (isFarsi) ? '۱۰' : '10',
                h5 : (isFarsi) ? 'تیتر' : 'Title',
                paragraph : (isFarsi) ? 
                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله ' 
                : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lah1ore et dolore magna aliqua.'
            },
            {
                h1 : (isFarsi) ? '۱۰' : '10',
                h5 : (isFarsi) ? 'تیتر' : 'Title',
                paragraph : (isFarsi) ? 
                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله ' 
                : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lah1ore et dolore magna aliqua.'
            },
        ],

        portfolio : {
            mainTitle : isFarsi ? 'نمونه کارها' : 'Portfolio',
            items : [
                {
                    title : isFarsi ? 'تیتر' : 'Title',
                    description : isFarsi ?
                    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و ' : 
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lah1ore et dolore magna aliqua.',
                },
                {
                    title : isFarsi ? 'تیتر' : 'Title',
                    description : isFarsi ?
                    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و ' : 
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lah1ore et dolore magna aliqua.',
                },
                {
                    title : isFarsi ? 'تیتر' : 'Title',
                    description : isFarsi ?
                    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و ' : 
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lah1ore et dolore magna aliqua.',
                },
                {
                    title : isFarsi ? 'تیتر' : 'Title',
                    description : isFarsi ?
                    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و ' : 
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lah1ore et dolore magna aliqua.',
                },
                {
                    title : isFarsi ? 'تیتر' : 'Title',
                    description : isFarsi ?
                    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و ' : 
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lah1ore et dolore magna aliqua.',
                },
                {
                    title : isFarsi ? 'تیتر' : 'Title',
                    description : isFarsi ?
                    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و ' : 
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lah1ore et dolore magna aliqua.',
                },
            ]
        },

        about : {
            mainTitle : isFarsi ? 'درباره ما' : 'About',
            firstSection : {
                title : isFarsi ? 'تیتر' : 'Title',
                subTitle : isFarsi ? 'زیر تیتر' : 'sub title',
                paragraph : isFarsi ? 
                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای ' 
                :'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorrit in voluptate adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorrit in voluptate',
            },
            secondSection : [
                {
                    title : isFarsi ? 'تیتر۱' : 'Title1',
                    subTitle : isFarsi ? 'زیر تیتر' : 'sub title',
                    paragraph : isFarsi ? 
                    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای ' :
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorrit in voluptate adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorrit in voluptate'
                },
                {
                    title : isFarsi ? 'تیتر۲' : 'Title2',
                    subTitle : isFarsi ? 'زیر تیتر' : 'sub title',
                    paragraph : isFarsi ? 
                    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای ' :
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorrit in voluptate adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorrit in voluptate'
                },
                {
                    title : isFarsi ? 'تیتر۳' : 'Title3',
                    subTitle : isFarsi ? 'زیر تیتر' : 'sub title',
                    paragraph : isFarsi ? 
                    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای ' :
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorrit in voluptate adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorrit in voluptate'
                },
                {
                    title : isFarsi ? 'تیتر۴' : 'Title4',
                    subTitle : isFarsi ? 'زیر تیتر' : 'sub title',
                    paragraph : isFarsi ? 
                    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای ' :
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorrit in voluptate adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorrit in voluptate'
                },
                {
                    title : isFarsi ? 'تیتر۵' : 'Title5',
                    subTitle : isFarsi ? 'زیر تیتر' : 'sub title',
                    paragraph : isFarsi ? 
                    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای ' :
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorrit in voluptate adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorrit in voluptate'
                },
                {
                    title : isFarsi ? 'تیتر۶' : 'Title6',
                    subTitle : isFarsi ? 'زیر تیتر' : 'sub title',
                    paragraph : isFarsi ? 
                    'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای ' :
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorrit in voluptate adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorrit in voluptate'
                },
            ]
        },

        contact : {
            mainTitle : isFarsi ? 'ارتباط با ما' : 'Contact',
            form : {
                name : isFarsi ? 'نام' : 'Name',
                email : isFarsi ? 'ایمیل' : 'Email',
                comment : isFarsi ? 'توضیح' : 'Comment',
            },
            secondSection : {
                title : isFarsi ? 'جهت کسب اطلاعات بیشتر' : 'For More Info',
                paragraph : isFarsi ? 
                 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون ' :
                 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorrit in voluptate velit esse',
                Address : isFarsi ? 'آدرس : خیابان مدرس' : 'Address : Lorem ipsum dolor sit amet ,',
                telephone : isFarsi ? 'تلفن : ۰۲۱-۲۲۲۲۲۲۲' : 'Telephone : 021-21111111'
            }

        },

        footer : isFarsi ? 'تمامی حقوق این سایت محفوظ است. ساخته شده توسط فاطمه مرزوقی' : 'All Rights are reserved. Created by fatemeh marzoughi'
    }

    return (Strings)
}
