import React from 'react';
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import {
  buildOkraWidgetWithOptions,
  buildOkraWidgetWithShortUrl,
} from './html_strings';

export interface okraWidgetOptions {
  clientName: string;
  env: string;
  key: string;
  token: string;
  products?: string[];
  logo: string;
  payment?: boolean;
  color: string;
  filters?: object;
  isCorporate?: boolean;
  showBalance?: boolean;
  geoLocation?: boolean;
  multiAccount?: boolean;
  limit?: number;
  callback_url?: string;
  connectMessage?: string;
  currency?: string;
  widget_success?: string;
  widget_failed?: string;
  guarantors?: object[];
  exp?: string;
  charge: object | boolean;
  customer?: string;
}

export interface OkraWidgetProps {
  useShortUrl: boolean;
  okraWidgetOptions?: okraWidgetOptions;
  shortUrl?: string;
  onSuccess: (data: any) => void;
  onClose: () => void;
  onBeforeClose?: () => void;
  onError: (error: any) => void;
}

export class OkraWidget extends React.Component<OkraWidgetProps> {
  render() {
    let {
      okraWidgetOptions,
      useShortUrl,
      shortUrl,
      onSuccess,
      onClose,
      onBeforeClose,
      onError,
    } = this.props;
    const handleMessage = (event: WebViewMessageEvent) => {
      const data = JSON.parse(event.nativeEvent.data);

      switch (data.event) {
        case 'option success':
          onSuccess(data.data);
          break;
        case 'option close':
          onClose();
          break;
        case 'option before close':
          if (onBeforeClose) {
            onBeforeClose();
          }
          break;
        case 'option error':
          onError(data.data);
          break;
        default:
          break;
      }
    };

    return (
      // @ts-ignore
      <WebView
        source={
          useShortUrl
            ? buildOkraWidgetWithShortUrl({ shortUrl })
            : buildOkraWidgetWithOptions({ okraWidgetOptions })
        }
        javaScriptEnabled={true}
        onMessage={handleMessage}
      />
    );
  }
}
