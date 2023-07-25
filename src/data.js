import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'


export const links = [
    {id : 1, href : '#home' , text : 'Home'},
    {id : 2, href : '#about' , text : 'About'},
    {id : 3, href : '#services' , text : 'Service'},
    {id : 4, href : '#tours' , text : 'Tours'},
]

export const social = [
    {id : 1, href : 'https://www.facebook.com', target : '_blank' , synbol : 'fab fa-facebook'},
    {id : 2, href : 'https://www.twitter.com', target : '_blank' , synbol : 'fab fa-twitter'},
    {id : 3, href : 'https://www.squarespace.com', target : '_blank' , synbol : 'fab fa-squarespace'},
]

export const services = [
    {id : 1, symbol :'fas fa-wallet fa-fw', serviceType :'saving money', text :'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.' },
    {id : 2, symbol :'fas fa-tree fa-fw', serviceType :'endless hiking', text :'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.' },
    {id : 3, symbol :'fas fa-socks fa-fw', serviceType :'amazing comfort', text :'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.'},

]

export const tours =[
    {id :1 , pic : tour1,tourDate : 'august 26th, 2020' , title:'Tibet Adventure',text :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', country : 'china', days : '6 days', cost : '$2100'},
    {id :2 , pic : tour2,tourDate : 'october 1th, 2020' , title:'best of java',text :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', country : 'indonesia', days : '11 days', cost : '$1400'},
    {id :3 , pic : tour3,tourDate : 'september 15th, 2020' , title:'explore hong kong',text :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', country : 'hong kong', days : '8 days', cost : '$5000'},
    {id :4 , pic : tour4,tourDate : 'december 5th, 2019' , title:'kenya highlights',text :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', country : 'kenya', days : '20 days', cost : '$3300'},
]