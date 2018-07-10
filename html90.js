sidebar90

&lt;div id=&quot;HTML90b&quot;&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
function showrecentposts(t){for(var e=0;e&lt;numposts;e++){var n,r=t.feed.entry[e],i=r.title.$t;if(e==t.feed.entry.length)break;for(var s=0;s&lt;r.link.length;s++)if(&quot;alternate&quot;==r.link[s].rel){n=r.link[s].href;break}i=i.link(n);var a=&quot;...&quot;,d=r.published.$t,u=d.substring(0,4),o=d.substring(5,7),c=d.substring(8,10),l=new Array;if(l[1]=&quot;Jan&quot;,l[2]=&quot;Feb&quot;,l[3]=&quot;Mar&quot;,l[4]=&quot;Apr&quot;,l[5]=&quot;May&quot;,l[6]=&quot;Jun&quot;,l[7]=&quot;Jul&quot;,l[8]=&quot;Aug&quot;,l[9]=&quot;Sep&quot;,l[10]=&quot;Oct&quot;,l[11]=&quot;Nov&quot;,l[12]=&quot;Dec&quot;,&quot;content&quot;in r)var m=r.content.$t;else if(&quot;summary&quot;in r)var m=r.summary.$t;else var m=&quot;&quot;;var w=/&lt;\S[^&gt;]*&gt;/g;if(m=m.replace(w,&quot;&quot;),document.write(&#39;&lt;div class=&quot;HTML90a&quot;&gt;&#39;),standardstyling&amp;&amp;document.write(),document.write(i),1==showpostdate&amp;&amp;document.write(&quot; - &quot;+l[parseInt(o,10)]+&quot; &quot;+c+&quot; &quot;+u),document.write(&#39;&lt;/div&gt;&lt;div class=&quot;HTML90c&quot;&gt;&#39;),1==showpostsummary)if(standardstyling&amp;&amp;document.write(&quot;&quot;),m.length&lt;numchars)standardstyling&amp;&amp;document.write(&quot;&lt;i&gt;&quot;),document.write(m),standardstyling&amp;&amp;document.write(&quot;&lt;/i&gt;&quot;);else{standardstyling&amp;&amp;document.write(&quot;&quot;),m=m.substring(0,numchars);var g=m.lastIndexOf(&quot; &quot;);m=m.substring(0,g),document.write(m+a),standardstyling&amp;&amp;document.write(&quot;&quot;)}document.write(&quot;&lt;/div&gt;&quot;),standardstyling&amp;&amp;document.write(&quot;&quot;)}standardstyling||document.write(&#39;&lt;div class=&quot;bbwidgetfooter&quot;&gt;&#39;),standardstyling&amp;&amp;document.write(&quot;&quot;),document.write(&quot;&quot;),standardstyling||document.write(&quot;&quot;)}
&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
var numposts = 500;var showpostdate = true;var showpostsummary = false;var numchars = 100;var standardstyling = true;
&lt;/script&gt;
&lt;script src=&quot;https://wahyunanangwidodo.blogspot.com/feeds/posts/default?orderby=published&amp;amp;alt=json-in-script&amp;amp;callback=showrecentposts&quot;&gt;
&lt;/script&gt;&lt;/div&gt;&lt;a style=&quot;font-size: 9px; color: #CECECE; float: right; margin-top: 10px;&quot; href=&quot;#&quot; rel=&quot;nofollow&quot; &gt;&lt;/a&gt;
&lt;noscript&gt;Your browser does not support JavaScript!&lt;/noscript&gt;
&lt;style type=&quot;text/css&quot;&gt;
.HTML90a { color: #c3c3c3; padding: 12px 15px;}
.HTML90a a
{   
   color: #444;
    font-size: 16px;
    /* line-height: 1.37; */
    max-height: 35px;
    /* font-weight: bold; */
}
.HTML90a:hover{
      box-shadow: 0 6px 12px rgba(0,0,0,.175);
}
#HTML90b {
    color: #eee;
    font-size: 12px; 
}
.HTML90c {
    
}
#tab1{
  padding-top: 20px; 
}
&lt;/style&gt;