function showrecentposts(json){for(var i=0;i<posts_number;i++){var entry=json.feed.entry[i];var posttitle=entry.title.$t;var posturl;if(i==json.feed.entry.length)break;for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break;}} posttitle=posttitle.link(posturl);var postdate=entry.published.$t;var showyear=postdate.substring(0,4);var showmonth=postdate.substring(5,7);var showday=postdate.substring(8,10);var monthnames=new Array();monthnames[1]="Jan";monthnames[2]="Feb";monthnames[3]="Mar";monthnames[4]="Apr";monthnames[5]="May";monthnames[6]="Jun";monthnames[7]="Jul";monthnames[8]="Aug";monthnames[9]="Sep";monthnames[10]="Oct";monthnames[11]="Nov";monthnames[12]="Dec";let divE=document.createElement('div');divE.className='latest-post-body';divE.innerHTML="<div class='latest-title'>"+posttitle+"</div>";let divN=document.createElement('div');divN.className='latestdate';divN.innerHTML=monthnames[parseInt(showmonth,10)]+' '+showday+' '+showyear;divE.appendChild(divN);document.body.appendChild(divE);var currentDiv=document.querySelector(".latestposts");currentDiv.appendChild(divE);}}