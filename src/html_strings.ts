export const buildOkraWidgetWithShortUrl = ({ shortUrl, deviceInfo }: any) => {
  const htmlContent = `
'''
  <!DOCTYPE html>
  <html lang='en'>
    <head>
      <meta charset='UTF-8'>
      <meta http-equiv='X-UA-Compatible' content='ie=edge'>
      <meta name='viewport' content='width=device-width, initial-scale=1.0'>
      <title>Okra React Native SDK</title>
    </head>
    <body onload='buildWithShortUrl()' style='background-color:#fff;height:100vh'>
      <script src='https://cdn.okra.ng/v2/bundle.js'></script>
      <script type='text/javascript'>
        window.onload = buildWithShortUrl;
        function buildWithShortUrl(){
          Okra.buildWithShortUrl({
            short_url: '${shortUrl}',
            // deviceInfo: '${deviceInfo}'
            onSuccess: function(data){
              let response = {event:'option success', data}
              window.ReactNativeWebView.postMessage(JSON.stringify(response))
            },
            onClose: function(){
              let response = {event:'option close'}
              window.ReactNativeWebView.postMessage(JSON.stringify(response))
            },
            BeforeClose: function(){
              let response = {event:'option before close'}
              window.ReactNativeWebView.postMessage(JSON.stringify(response))
            },
            onError: function(data){
              let response = {event:'option error', data}
              window.ReactNativeWebView.postMessage(JSON.stringify(response))
            }
          })
        }
      </script>
    </body>
  </html>
''' `;

  return { html: htmlContent };
};

export const buildOkraWidgetWithOptions = ({
  okraWidgetOptions,
  deviceInfo,
}: any) => {
  const htmlContent = `
    '''
    <!DOCTYPE html>
    <html lang='en'>
      <head>
        <meta charset='UTF-8'>
        <meta http-equiv='X-UA-Compatible' content='ie=edge'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Okra React Native SDK</title>
      </head>
      <body onload='buildWithOptions()' style='background-color:#fff;height:100vh'>
        <script src='https://cdn.okra.ng/v2/bundle.js'></script>
        <script type='text/javascript'>
          window.onload = buildWithOptions;
          function buildWithOptions() {
            Okra.buildWithOptions({
              name: '${okraWidgetOptions.clientName}',
              env: '${okraWidgetOptions.env}',
              key: '${okraWidgetOptions.key}',
              token: '${okraWidgetOptions.token}',
              products: ${JSON.stringify(okraWidgetOptions.products)},
              logo: '${okraWidgetOptions.logo}',
              payment: ${okraWidgetOptions.payment},
              meta: '${okraWidgetOptions.meta}',
              options: ${JSON.stringify(okraWidgetOptions.options)},
              color: '${okraWidgetOptions.color}',
              filter: "'${okraWidgetOptions.filters}'",
              isCorporate: ${okraWidgetOptions.isCorporate},
              showBalance: ${okraWidgetOptions.showBalance},
              geoLocation: ${okraWidgetOptions.geoLocation},
              multi_account: ${okraWidgetOptions.multiAccount},
              limit: ${okraWidgetOptions.limit},
              callback_url: '${okraWidgetOptions.callback_url}',
              connectMessage: '${okraWidgetOptions.connectMessage}',
              currency: '${okraWidgetOptions.currency}',
              widget_success: '${okraWidgetOptions.widget_success}',
              widget_failed: '${okraWidgetOptions.widget_failed}',
              guarantors: "'${okraWidgetOptions.guarantors}'",
              exp: '${okraWidgetOptions.exp}',
              charge: ${okraWidgetOptions.charge},
              customer: ${okraWidgetOptions.customer},
              // deviceInfo: '${JSON.stringify(deviceInfo)}'
              onSuccess: function(data) {
                let response = {event:'option success', data}
                window.ReactNativeWebView.postMessage(JSON.stringify(response))
              },
              onClose: function() {
                let response = {event:'option close'}
                window.ReactNativeWebView.postMessage(JSON.stringify(response))
              },
              BeforeClose: function() {
                let response = {event:'option before close'}
                window.ReactNativeWebView.postMessage(JSON.stringify(response))
              },
              onError: function(data) {
                let response = {event:'option error', data}
                window.ReactNativeWebView.postMessage(JSON.stringify(response))
              }
            })
          }
        </script>
      </body>
    </html>
    '''
  `;

  return { html: htmlContent };
};
