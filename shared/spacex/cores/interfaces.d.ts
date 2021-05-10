export interface Core {
    block:        number | null;
    reuseCount:   number;
    rtlsAttempts: number;
    rtlsLandings: number;
    asdsAttempts: number;
    asdsLandings: number;
    lastUpdate:   null | string;
    launches:     string[];
    serial:       string;
    status:       Status;
    id:           string;
}

export enum Status {
    Active = "active",
    Expended = "expended",
    Inactive = "inactive",
    Lost = "lost",
    Unknown = "unknown",
}
