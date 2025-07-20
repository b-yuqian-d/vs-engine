docker run \
	--name code-server \
	-p 8000:8000/tcp \
	-p 8000:8000/udp \
	-d \
	code-server:latest --host 0.0.0.0 --port 8000 --without-connection-token --default-workspace /root
