var searchApi={language:{english:bibleObject,greek:greekObject,hebrew:hebrewObject},types:["word","lemma","morph"],results:{references:[],matches:{}},getReferences:function(e){console.log(e);this.lookForTerm(e);return this.results.references},doesDataMatchTerm:function(e,t,n){t=t.toLowerCase();n=n.toLowerCase();return t===n?!0:e!=="lemma"&&t.search(n)>-1?!0:!1},resetMatches:function(){this.results.matches={}},addReference:function(e,t,n){this.results.references.push({book:e,chapter:t+1,verse:n+1})},lookForTerm:function(e){var t=this,n=this.language[e.language];t.results.references=[];t.resetMatches();for(var r in n){book=n[r];$(document).trigger("loading","searching "+r);for(var i=0,s=book.length;i<s;i++){chapter=book[i];e.range==="chapter"&&e.clusivity==="exclusive"&&t.resetMatches();for(var o=0,u=chapter.length;o<u;o++){verse=chapter[o];e.range==="verse"&&e.clusivity==="exclusive"&&t.resetMatches();for(var a=0,f=verse.length;a<f;a++){var l=verse[a];e.range==="word"&&e.clusivity==="exclusive"&&t.resetMatches();var c=0,h,p;for(var d in t.types){var v=t.types[d];p=e[v];if(p!==undefined&&p!==""&&l!==undefined&&typeof l[d]!="undefined"){var m=p.split(" "),c=c+m.length,h=0;$.each(m,function(n,s){t.doesDataMatchTerm(v,l[d],s)&&(e.clusivity==="exclusive"?t.results.matches[s]=!0:t.addReference(r,i,o))})}}if(e.clusivity==="exclusive"){h=0;$.each(t.results.matches,function(e){h++});if(h>=c){t.addReference(r,i,o);t.resetMatches()}}}}}}},standarizeWordEndings:function(e){return e.replace(/ם/gi,"מ")},getTranslations:function(e){}};