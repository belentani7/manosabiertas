import dns from 'node:dns';
import http from 'node:http';
import https from 'node:https';
import net from 'node:net';
import tls from 'node:tls';
import { syncBuiltinESMExports } from 'node:module';

const deny = () => {
  throw new Error('Network access is disabled in core tests');
};

globalThis.fetch = deny;
dns.lookup = deny;
dns.resolve = deny;
http.get = deny;
http.request = deny;
https.get = deny;
https.request = deny;
net.connect = deny;
net.createConnection = deny;
tls.connect = deny;
syncBuiltinESMExports();
