&lt;div id=&quot;hlrpsa&quot;&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
function showrecentposts(t){for(var e=0;e&lt;numposts;e++){var n,r=t.feed.entry[e],i=r.title.$t;if(e==t.feed.entry.length)break;for(var s=0;s&lt;r.link.length;s++)if(&quot;alternate&quot;==r.link[s].rel){n=r.link[s].href;break}i=i.link(n);var a=&quot;...&quot;,d=r.published.$t,u=d.substring(0,4),o=d.substring(5,7),c=d.substring(8,10),l=new Array;if(l[1]=&quot;Jan&quot;,l[2]=&quot;Feb&quot;,l[3]=&quot;Mar&quot;,l[4]=&quot;Apr&quot;,l[5]=&quot;May&quot;,l[6]=&quot;Jun&quot;,l[7]=&quot;Jul&quot;,l[8]=&quot;Aug&quot;,l[9]=&quot;Sep&quot;,l[10]=&quot;Oct&quot;,l[11]=&quot;Nov&quot;,l[12]=&quot;Dec&quot;,&quot;content&quot;in r)var m=r.content.$t;else if(&quot;summary&quot;in r)var m=r.summary.$t;else var m=&quot;&quot;;var w=/&lt;\S[^&gt;]*&gt;/g;if(m=m.replace(w,&quot;&quot;),document.write(&#39;&lt;div class=&quot;rctitle&quot;&gt;&#39;),standardstyling&amp;&amp;document.write(&quot;&lt;br/&gt;&quot;),document.write(i),1==showpostdate&amp;&amp;document.write(&quot; - &quot;+l[parseInt(o,10)]+&quot; &quot;+c+&quot; &quot;+u),document.write(&#39;&lt;/div&gt;&lt;div class=&quot;rcsumm&quot;&gt;&#39;),1==showpostsummary)if(standardstyling&amp;&amp;document.write(&quot;&quot;),m.length&lt;numchars)standardstyling&amp;&amp;document.write(&quot;&lt;i&gt;&quot;),document.write(m),standardstyling&amp;&amp;document.write(&quot;&lt;/i&gt;&quot;);else{standardstyling&amp;&amp;document.write(&quot;&quot;),m=m.substring(0,numchars);var g=m.lastIndexOf(&quot; &quot;);m=m.substring(0,g),document.write(m+a),standardstyling&amp;&amp;document.write(&quot;&quot;)}document.write(&quot;&lt;/div&gt;&quot;),standardstyling&amp;&amp;document.write(&quot;&quot;)}standardstyling||document.write(&#39;&lt;div class=&quot;bbwidgetfooter&quot;&gt;&#39;),standardstyling&amp;&amp;document.write(&quot;&quot;),document.write(&quot;&quot;),standardstyling||document.write(&quot;&quot;)}
&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
var numposts = 500;var showpostdate = true;var showpostsummary = false;var numchars = 100;var standardstyling = true;
&lt;/script&gt;
&lt;/div&gt;&lt;a style=&quot;font-size: 9px; color: #CECECE; float: right; margin-top: 10px;&quot; href=&quot;#&quot; rel=&quot;nofollow&quot; &gt;&lt;/a&gt;
&lt;noscript&gt;Your browser does not support JavaScript!&lt;/noscript&gt;
 