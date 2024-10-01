export type FdaResponse = {
  meta: {
    disclaimer: string;
    terms: string;
    license: string;
    last_updated: string;
    results: {
      skip: number;
      limit: number;
      total: number;
    };
  };
  results: Array<
    {
      status: 'Ongoing' | 'Terminated' | 'Completed';
      city: string;
      state: string;
      country: string;
      classification: string;
      openfda: Record<string, string>;
      product_type: string;
      event_id: string;
      recalling_firm: string;
      address_1: string;
      address_2: string;
      postal_code: string;
      voluntary_mandated: string;
      initial_firm_notification: string;
      distribution_pattern: string;
      recall_number: string;
      product_description: string;
      product_quantity: string;
      reason_for_recall: string;
      recall_initiation_date: string;
      center_classification_date: string;
      termination_date: string;
      report_date: string;
      code_info: string;
    }
  >
};
