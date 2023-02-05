import{_ as t,p as e,q as d,a1 as r}from"./framework-96b046e1.js";const o={},n=r('<h2 id="defined-by-jql" tabindex="-1"><a class="header-anchor" href="#defined-by-jql" aria-hidden="true">#</a> Defined by JQL</h2><p>In JQL, both <em>Operators</em> and <em>Keywords</em> are defined, in here, it is described which operator(or keyword) is supported(or not supported) by jql2sql package.</p><h3 id="keywords" tabindex="-1"><a class="header-anchor" href="#keywords" aria-hidden="true">#</a> Keywords</h3><p>As JQL support keywords(<em>and</em>, <em>or</em>, <em>is</em>, <em>in</em>, <em>not</em>), we support them and theire combination like below.</p><ul><li>(<em>expression</em>) <strong>and</strong> (<em>expression</em>)</li><li>(<em>expression</em>) <strong>or</strong> (<em>expression</em>)</li><li>&#39;is&#39;* and <em>&#39;is not&#39;</em> are supported</li><li>&#39;in&#39;* and <em>&#39;not in&#39;</em> are supported</li></ul><p>For more detail, please see <a href="#operators">Operators</a> section below.</p><h3 id="operators" tabindex="-1"><a class="header-anchor" href="#operators" aria-hidden="true">#</a> Operators</h3><table><thead><tr><th>Operator</th><th>Supported or Not</th><th>Note</th></tr></thead><tbody><tr><td>=</td><td>&gt;= 0.0.7</td><td>N/A</td></tr><tr><td>!=</td><td>Will be supported</td><td>N/A</td></tr><tr><td>&gt;</td><td>&gt;= 0.0.7</td><td>N/A</td></tr><tr><td>&lt;</td><td>&gt;= 0.0.7</td><td>N/A</td></tr><tr><td>&gt;=</td><td>&gt;= 0.0.7</td><td>N/A</td></tr><tr><td>&lt;=</td><td>&gt;= 0.0.7</td><td>N/A</td></tr><tr><td>~</td><td>&gt;= 0.0.7</td><td>N/A</td></tr><tr><td>!~</td><td>&gt;= 0.0.11</td><td>N/A</td></tr><tr><td>in</td><td>&gt;= 0.0.11</td><td>N/A</td></tr><tr><td>not in</td><td>&gt;= 0.0.11</td><td>N/A</td></tr><tr><td>is</td><td>&gt;= 0.0.11</td><td>N/A</td></tr><tr><td>is not</td><td>&gt;= 0.0.11</td><td>N/A</td></tr><tr><td>was</td><td>No plane to support</td><td>Too dependent on Jira</td></tr><tr><td>was not</td><td>No plane to support</td><td>Too dependent on Jira</td></tr><tr><td>was in</td><td>No plane to support</td><td>Too dependent on Jira</td></tr><tr><td>was not in</td><td>No plane to support</td><td>Too dependent on Jira</td></tr><tr><td>changed</td><td>No plane to support</td><td>Too dependent on Jira</td></tr></tbody></table><h3 id="functions" tabindex="-1"><a class="header-anchor" href="#functions" aria-hidden="true">#</a> Functions</h3><p>In Jira, many functions are introduced as per Jira&#39;s features. But, we just borrow jql grammer, so only few functions are supported as extended functions. Currently, only <strong>now()</strong> function will be supported and rest of jql functions will not be supported officially. However, you can implemented them as your own function with extended function feature.</p>',10),a=[n];function s(i,p){return e(),d("div",null,a)}const h=t(o,[["render",s],["__file","index.html.vue"]]);export{h as default};