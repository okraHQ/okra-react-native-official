import React, { Component } from 'react';
import { OkraWidget, okraWidgetOptions } from './okra';

interface Guarantors {
  status: boolean;
  message: string;
  number: 3;
}
interface Filters {
  industry_type: string;
  banks: string[];
}

export interface OkraOptionsProps {
  okraOptions: {
    clientName: string;
    env: string;
    key: string;
    token: string;
    products: string[];
    logo: string;
    payment?: boolean;
    meta?: any;
    color: string;
    filters?: Filters;
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
    guarantors?: Guarantors;
    customerId?: string;
    customerBvn?: string;
    customerPhone?: string;
    customerEmail?: string;
    customerNin?: string;
    exp?: string;
    chargeNote?: string;
    chargeType?: string;
    chargeAmount?: number;
    chargeCurrency?: string;
  };
  onSuccess: (data: any) => void;
  onClose: (data: any) => void;
  onBeforeClose?: (data: any) => void;
  onError: (error: any) => void;
}

export interface OkraUrlProps {
  shortUrl: string;
  onSuccess: (data: any) => void;
  onClose: (data: any) => void;
  onBeforeClose?: (data: any) => void;
  onError: (error: any) => void;
}

export class Okra extends Component {
  static buildWithOptions = (props: OkraOptionsProps) => {
    const customerObj: Map<string, Map<string, string>> = new Map();
    customerObj.set('id', new Map([['id', props.okraOptions.customerId!]]));
    customerObj.set('bvn', new Map([['bvn', props.okraOptions.customerBvn!]]));
    customerObj.set(
      'phone',
      new Map([['phone', props.okraOptions.customerPhone!]])
    );
    customerObj.set(
      'email',
      new Map([['email', props.okraOptions.customerEmail!]])
    );
    customerObj.set('nin', new Map([['nin', props.okraOptions.customerNin!]]));

    let customer: Record<string, any> = {};
    if (
      props.okraOptions.customerId != null &&
      props.okraOptions.customerId.length > 0
    ) {
      customer = customerObj.get('id')!;
    } else if (
      props.okraOptions.customerBvn != null &&
      props.okraOptions.customerBvn.length > 0
    ) {
      customer = customerObj.get('bvn')!;
    } else if (
      props.okraOptions.customerPhone != null &&
      props.okraOptions.customerPhone.length > 0
    ) {
      customer = customerObj.get('phone')!;
    } else if (
      props.okraOptions.customerEmail != null &&
      props.okraOptions.customerEmail.length > 0
    ) {
      customer = customerObj.get('email')!;
    } else if (
      props.okraOptions.customerNin != null &&
      props.okraOptions.customerNin.length > 0
    ) {
      customer = customerObj.get('nin')!;
    }

    const charge = {
      type: props.okraOptions.chargeType ?? '',
      amount: props.okraOptions.chargeAmount ?? '',
      note: props.okraOptions.chargeNote ?? '',
      currency: props.okraOptions.chargeCurrency ?? '',
    };

    const finalProps: okraWidgetOptions = {
      ...props.okraOptions,
      charge: props.okraOptions.payment ? charge : false,
      customer: `"${customer}"`,
    };

    return (
      <OkraWidget
        okraWidgetOptions={finalProps}
        useShortUrl={false}
        onClose={props.onClose}
        onSuccess={props.onSuccess}
        onError={props.onError}
      />
    );
  };

  static buildWithShortUrl = (props: OkraUrlProps) => {
    return (
      <OkraWidget
        shortUrl={props.shortUrl}
        useShortUrl={true}
        onClose={props.onClose}
        onSuccess={props.onSuccess}
        onError={props.onError}
      />
    );
  };
}
