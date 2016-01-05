# forms

Various tools for skinning and improving forms

##tweet_preview
This script takes a form input field (usually text) and a div as input and will watch the form field for changes.  When a change is detected the script will check if the content is a valid twitter url leading to a tweet and use twitter's existing tools to replace the div content with the tweet specified.

This tool is designed to allow visual validation for a form requesting the URL for a tweet by providing a real-time preview of the content.

####Use
Include jQuery and tweet_preview.js either locally or using the github uri below:

```
<script type="text/javascript" src="<script src="https://raw.githubusercontent.com/ryanpq/forms/master/tweet_preview.js" type="text/javascript"></script>
"/>
```

Then add a `<script>` block with a call to initialize the script. In this section, replace `form_field` with the form field to connect tweet_preview.js to and `empty_div` with the div where you want the preview to appear.

```
<script type="text/javascript">
    $( document ).ready(function() {
        t_preview('form_field','empty_div')
        });
</script>
```
